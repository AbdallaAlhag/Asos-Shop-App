/* eslint-disable react/no-unescaped-entities */
import {
  Content,
  StyledImg,
  StyledP,
  StyledDiv,
  StyledButton,
} from "../../style/CommonComponents";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import { useSave } from "../../pages/Save/SaveContext";
import { useCart } from "../../pages/Cart/CartContext";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

// import ItemInfoLoader from "../SkeletonLoader/ItemInfoLoader";
// import { useState, useEffect } from "react";
import SizingComponent from "../ItemInfo/SizingComponent";

const Divider = styled.div`
  width: 15vw;
  height: 1px;
  background-color: #ccc;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0px;
  left: 0px;
  cursor: pointer;
`;

const ParentContainer = styled.div`
  position: relative;
`;

const SavedItem = ({ data }) => {
  const { removeFromSave } = useSave();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null); // State
  //   const [loading, setLoading] = useState(true); // Initialize loading state
  console.log(data);
  const completeImageUrl = data.imageUrl?.startsWith("http")
    ? data.imageUrl
    : `https://${data.imageUrl}`;
  data;

  const itemPath = data.name.replace(/ /g, "-");

  const discountPercent =
    data.price.previous && data.price.current
      ? ((parseFloat(data.price.previous.text.replace(/[^0-9.-]+/g, "")) -
          parseFloat(data.price.current.text.replace(/[^0-9.-]+/g, ""))) /
          parseFloat(data.price.previous.text.replace(/[^0-9.-]+/g, ""))) *
        100
      : null;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       // Simulate data fetching or any asynchronous operation
  //       await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the time as needed
  //       setLoading(false);
  //     };

  //     fetchData();
  //   }, []);
  // Convert to a string with the '%' symbol and round to the nearest whole number.
  const formattedDiscountPercent = discountPercent
    ? `${Math.round(discountPercent)}%`
    : null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      // Changed this to custom error later
      return;
    }
    addToCart({ ...data, selectedSize });
    removeFromSave(data);
  };

  const handleRemoveFromSave = () => {
    removeFromSave(data);
  };

  //   if (loading) {
  //     return <ItemInfoLoader />;
  //   }
  return (
    <Content
      $flexDirection="column"
      $padding="20px"
      $alignItems="flex-start"
      $flexWrap="wrap"
      $gap="5px"
      $width="25%"
    >
      <ParentContainer>
        <Link to={`/Checkout/${itemPath}-${data.id}`} state={{ data: data }}>
          <StyledImg
            $height="auto"
            src={completeImageUrl}
            alt={data.name}
          ></StyledImg>
        </Link>
        <StyledIcon
          path={mdiTrashCanOutline}
          size={1.5}
          color={"black"}
          onClick={handleRemoveFromSave}
        />
      </ParentContainer>

      <Link to={`/Checkout/${itemPath}-${data.id}`} state={{ data: data }}>
        <StyledP $textAlign="left" $margin="5px 0px" $fontSize="14px">
          {data.name}
        </StyledP>
      </Link>
      {discountPercent ? (
        <StyledDiv $flexDirection="column" $margin="5px 0px">
          <StyledP
            $color="#d01345"
            $fontWeight="bold"
            $textAlign="left"
            $margin="0px"
          >
            Now {data.price.current?.text || "N/A"}
          </StyledP>
          <StyledP $margin=" 5px 0px " $textAlign="left" $fontSize="12px">
            Was {data.price.previous?.text || "N/A"}{" "}
          </StyledP>
          <StyledP
            $color="#d01345"
            $textAlign="left"
            $margin="0px"
            $fontSize="12px"
          >
            (-{formattedDiscountPercent})
          </StyledP>
        </StyledDiv>
      ) : (
        <StyledP $margin="5px 0px" $textAlign="left">
          {data.price.current?.text || "N/A"}
        </StyledP>
      )}
      <Divider />
      <StyledP $textAlign="left" $margin="5px 0px" $color="#cfcfcf">
        {data.colour}
      </StyledP>
      <Divider />
      <SizingComponent productId={data.id} onSizeChange={setSelectedSize} />
      <StyledButton
        $width="100%"
        $margin="0px"
        $bgColor="#018849"
        $hoverBgColor="#006637"
        $textColor="white"
        $border="2px solid #018849"
        $borderRadius="0px"
        $hoverBorderColor="#006637"
        $fontWeight="bold"
        onClick={handleAddToCart}
      >
        Add to Bag
      </StyledButton>
    </Content>
  );
};

SavedItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.shape({
      current: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string,
      }),
      previous: PropTypes.shape({
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

export default SavedItem;
