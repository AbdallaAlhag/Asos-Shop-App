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

const CartItem = ({ data }) => {
  const item = data.item;
  const completeImageUrl = item.imageUrl?.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  return (
    <Content
      $flexDirection="row"
      $padding="20px"
      $alignItems="flex-start"
      $borderBottom="1px solid #eeeeee"
      $gap='20px'
    >
      <StyledImg
        $height="200px"
        src={completeImageUrl}
        alt={item.name}
      ></StyledImg>
      <StyledDiv $flexDirection="column" $alignItems="flex-start" $margin="0px">
        {/* <StyledP $fontWeight="bold">{data.price.current.text}</StyledP> */}
        {item.price?.current ? (
          <StyledP $fontWeight="bold">{item.price.current.text}</StyledP>
        ) : (
          <StyledP>Price not available</StyledP>
        )}
        <StyledP $textAlign="left">{item.name}</StyledP>
        <Content $flexDirection="row" $margin="0px">
          <StyledP $textAlign="left">{item.colour}</StyledP>
          <StyledP $textAlign="left">Size (gotta send this over)</StyledP>
          <StyledP $textAlign="left">Quantity: {data.quantity}</StyledP>
        </Content>
      </StyledDiv>
      <StyledDiv>
        <StyledButton $margin='0px' $padding='0px'>
          <Icon path={mdiClose} size={1} />
        </StyledButton>
      </StyledDiv>
    </Content>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    item: PropTypes.shape({
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
    }).isRequired,
    quantity: PropTypes.number,
  }),
};

export default CartItem;
