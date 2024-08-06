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

const CartItem = ({ data }) => {
  const { removeFromCart, incrementItemInCart, decrementItemInCart } =
    useCart();
  const completeImageUrl = data.imageUrl?.startsWith("http")
    ? data.imageUrl
    : `https://${data.imageUrl}`;
  return (
    <Content
      $flexDirection="row"
      $padding="20px"
      $alignItems="flex-start"
      $borderBottom="2px solid #eeeeee"
      $gap="20px"
    >
      <StyledImg
        $height="150px"
        src={completeImageUrl}
        alt={data.name}
      ></StyledImg>
      <StyledDiv $flexDirection="column" $alignItems="flex-start" $margin="0px">
        {/* <StyledP $fontWeight="bold">{data.price.current.text}</StyledP> */}
        {data.price?.current ? (
          <StyledP $fontWeight="bold">{data.price.current.text}</StyledP>
        ) : (
          <StyledP>Price not available</StyledP>
        )}
        <StyledP $textAlign="left">{data.name}</StyledP>
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
