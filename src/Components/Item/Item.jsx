import { ItemContainer } from "./ItemStyled";
import { StyledImg, StyledP } from "../../style/CommonComponents";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeartButton from "../HeartButton";
import { useSave } from "../../pages/Save/SaveContext";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  display: inline-block; /* Ensures the container sizes to the image */
`;

function Item({
  item,
  height,
  width,
  title = false,
  brand = false,
  saveIcon = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isSaved, setIsSaved] = useState(false);
  const { addToSave, removeFromSave } = useSave();

  const completeImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  let completeHoverImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;
  if (item.additionalImageUrls && item.additionalImageUrls.length !== 0) {
    completeHoverImageUrl = item.additionalImageUrls[0].startsWith("http")
      ? item.additionalImageUrls[0]
      : `https://${item.additionalImageUrls[0]}`;
  }
  const handleAddToSave = () => {
    // Update the state based on the previous state
    setIsSaved((prevIsSaved) => {
      const newIsSaved = !prevIsSaved;

      // Add or remove the item based on the new state
      if (newIsSaved) {
        addToSave({ ...item });
      } else {
        removeFromSave(item);
      }

      return newIsSaved; // Return the new state value
    });
  };
  const itemPath = item.name.replace(/ /g, "-");
  return (
    <ItemContainer $height={height} $width={width}>
      {/* <Link to={`/Checkout/${itemPath}-${item.id}`} state={{ data: item }}>
        <StyledImg
          $height={height}
          $width={width}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={isHovered ? completeHoverImageUrl : completeImageUrl}
          alt={item.name}
        />
      </Link> */}
      {saveIcon ? (
        <ImgContainer>
          <Link to={`/Checkout/${itemPath}-${item.id}`} state={{ data: item }}>
            <StyledImg
              $height={height}
              $width={width}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              src={isHovered ? completeHoverImageUrl : completeImageUrl}
              alt={item.name}
            />
          </Link>
          <HeartButton
            onClick={handleAddToSave}
            width="20px"
            height="20px"
            margin="10px"
            position="absolute"
            top="80%"
            left="70%"
          />
        </ImgContainer>
      ) : (
        <Link to={`/Checkout/${itemPath}-${item.id}`} state={{ data: item }}>
          <StyledImg
            $height={height}
            $width={width}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={isHovered ? completeHoverImageUrl : completeImageUrl}
            alt={item.name}
          />
        </Link>
      )}
      {title && (
        <StyledP $textAlign="left" $fontSize="12px" $margin="10px 0px">
          {item.name}
        </StyledP>
      )}
      <StyledP
        $textAlign="left"
        $fontSize="12px"
        $fontWeight="bold"
        $margin="10px 0px"
      >
        {item.price.current.text}
      </StyledP>
      {brand && (
        <StyledP $textAlign="left" $fontSize="12px" $margin="0px 0px">
          {item.brandName}
        </StyledP>
      )}
    </ItemContainer>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.bool,
  brand: PropTypes.bool,
  saveIcon: PropTypes.bool,
};

// Item.defaultProps = {
//   title: false,
//   brand: false,
// };
export default Item;
