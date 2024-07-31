import { ItemContainer, HoverImg } from "./ItemStyled";
import { StyledImg, StyledP } from "../../style/CommonComponents";
import PropTypes from "prop-types";

function Item({ item }) {

  const completeImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  const completeHoverImageUrl = item.additionalImageUrls[0].startsWith("http")
    ? item.hoverImageUrl
    : `https://${item.hoverImageUrl}`;

  return (
    <ItemContainer>
      <StyledImg src={completeImageUrl} alt={item.name} />
      <HoverImg src={completeHoverImageUrl} alt={`${item.name} Hover`} />
      <StyledP $textAlign="left" $fontSize="12px" $margin="10px 0px">
        {item.name}
      </StyledP>
      <StyledP
        $textAlign="left"
        $fontSize="12px"
        $fontWeight="bold"
        $margin="10px 0px"
      >
        {item.price.current.text}
      </StyledP>
    </ItemContainer>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Item;
