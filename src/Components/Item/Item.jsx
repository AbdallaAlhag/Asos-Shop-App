import { ItemContainer } from "./ItemStyled";
import { StyledImg, StyledP } from "../../style/CommonComponents";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const completeImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  let completeHoverImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;
  if (item.additionalImageUrls.length !== 0) {
    completeHoverImageUrl = item.additionalImageUrls[0].startsWith("http")
      ? item.additionalImageUrls[0]
      : `https://${item.additionalImageUrls[0]}`;
  }

  const itemPath = item.name.replace(/ /g, "-");
  return (
    <ItemContainer>
      <Link to={`/Checkout/${itemPath}-${item.id}`} state={{ data: item }}>
        <StyledImg
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={isHovered ? completeHoverImageUrl : completeImageUrl}
          alt={item.name}
        />
      </Link>
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
