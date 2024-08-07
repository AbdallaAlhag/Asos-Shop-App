import PropTypes from "prop-types";
import {
  Content,
  StyledImg,
  StyledP,
  StyledDiv,
  StyledButton,
} from "../../style/CommonComponents";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiPlus } from "@mdi/js";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ data }) => {
  const { removeFromCart, incrementItemInCart, decrementItemInCart } =
    useCart();
  const completeImageUrl = data.imageUrl?.startsWith("http")
    ? data.imageUrl
    : `https://${data.imageUrl}`;
  (data);
  const itemPath = data.name.replace(/ /g, "-");
  return (
    <Content
      $flexDirection="row"
      $padding="20px"
      $alignItems="flex-start"
      $borderBottom="2px solid #eeeeee"
      $gap="20px"
    >
      <Link to={`/Checkout/${itemPath}-${data.id}`} state={{ data: data }}>
        <StyledImg
          $height="auto"
          src={completeImageUrl}
          alt={data.name}
        ></StyledImg>
      </Link>
      <StyledDiv $flexDirection="column" $alignItems="flex-start" $justifyContent='space-around' $margin="0px">
        {data.price?.current ? (
          <StyledP $fontWeight="bold">{data.price.current.text}</StyledP>
        ) : (
          <StyledP>Price not available</StyledP>
        )}
        <Link to={`/Checkout/${itemPath}-${data.id}`} state={{ data: data }}>
          <StyledP $textAlign="left">{data.name}</StyledP>
        </Link>

        <Content $flexDirection="row" $margin="0px">
          <StyledP $textAlign="left">{data.colour}</StyledP>
          <StyledP $textAlign="left">
            Size: {data.selectedSize.brandSize}
          </StyledP>
          <StyledDiv>
            <StyledButton
              $padding="0px"
              $margin="0px"
              $border="none"
              $hoverBgColor="#eeeeee"
              onClick={() => decrementItemInCart(data)}
            >
              <Icon path={mdiMinus} size={1} color={"black"} />
            </StyledButton>
            <StyledP $textAlign="left">Qty: {data.quantity}</StyledP>
            <StyledButton
              $padding="0px"
              $margin="0px"
              $border="none"
              $hoverBgColor="#eeeeee"
              onClick={() => incrementItemInCart(data)}
            >
              <Icon path={mdiPlus} size={1} color={"black"} />
            </StyledButton>
          </StyledDiv>
        </Content>
      </StyledDiv>
      <StyledDiv>
        <StyledButton
          $margin="0px"
          $padding="0px"
          onClick={() => removeFromCart(data)}
        >
          <Icon path={mdiClose} size={1} />
        </StyledButton>
      </StyledDiv>
    </Content>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.shape({
      current: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string,
      }),
    }).isRequired,
    colour: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    selectedSize: PropTypes.shape({
      brandSize: PropTypes.string,
    }),
  }),
};

export default CartItem;
