import PropTypes from "prop-types";
import {
  Content,
  StyledImg,
  StyledP,
  StyledDiv,
} from "../../style/CommonComponents";

const CartItem = ({ data, quantity }) => {
  const completeImageUrl = data.imageUrl?.startsWith("http")
    ? data.imageUrl
    : `https://${data.imageUrl}`;

  return (
    // price, imageUrl, Name, color?, size, quality,
    <Content $flexDirection="row" $padding="20px" $alignItems="flex-start">
      <StyledImg $height="200px" src={completeImageUrl} alt=""></StyledImg>
      <StyledDiv $flexDirection="column" $alignItems="flex-start" $margin="0px">
        <StyledP $fontWeight="bold">{data.price.current.text}</StyledP>
        <StyledP>{data.name}</StyledP>
        <Content $flexDirection="row" $margin="0px">
          <StyledP>{data.colour}</StyledP>
          <StyledP>Size</StyledP>
          <StyledP>quality</StyledP>
        </Content>
      </StyledDiv>
    </Content>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.shape({
      current: PropTypes.number.isRequired,
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.string.isRequired,
};
export default CartItem;
