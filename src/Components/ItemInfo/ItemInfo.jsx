import {
  Container,
  Content,
  Column,
  StyledP,
  StyledButton,
  StyledDiv,
} from "../../style/CommonComponents";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AccordionComponent from "./AccordionComponent";
import SizingComponent from "./SizingComponent";
import SlickCarousel from "../SlickCarousel";
import { useCart } from "../../pages/Cart/CartContext";
import ItemInfoLoader from "../../Components/SkeletonLoader/ItemInfoLoader";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const ItemInfo = ({ item }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [loading, setLoading] = useState(true); // Initialize loading state

  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate data fetching or any asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the time as needed
      setLoading(false);
    };

    fetchData();
  }, []);

  // Construct the complete image URL
  const completeImageUrl = item.imageUrl?.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  const images = [completeImageUrl];

  if (item.additionalImageUrls && item.additionalImageUrls?.length !== 0) {
    item.additionalImageUrls.map((image) => {
      const temp = item.imageUrl.startsWith("http")
        ? item.imageUrl
        : `https://${image}`;
      images.push(temp);
    });
  }
  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      // Changed this to custom error later
      return;
    }
    //
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 2000);
    //
    addToCart({ ...item, selectedSize });
  };

  if (loading) {
    return <ItemInfoLoader />;
  }

  return (
    <Container $gap="50px">
      <Content>
        <SlickCarousel images={images}></SlickCarousel>
      </Content>
      <Column
        $justifyContent="flex-start"
        $alignItems="flex-start"
        $width="35%"
      >
        <StyledP $margin="10px 0px" $textAlign="left">
          {item.name}
        </StyledP>
        <StyledP $margin="10px 0px" $textAlign="left">
          {item.price.current?.text || "N/A"}
        </StyledP>{" "}
        {/* Access price text */}
        <StyledDiv $backGroundColor="#cde2f5" $margin="10px 0px">
          <StyledP $margin="10px 10px" $textAlign="left">
            {/* icon */}
            PSST! NEW HERE? Get 10% off almost everything!* With code:{" "}
            <strong>HIFRIEND</strong>
          </StyledP>
        </StyledDiv>
        <StyledP $fontSize="12px" $textAlign="left" $margin="10px 0px">
          <strong>COLOR:</strong> {item.colour || "N/A"}
        </StyledP>
        {/* Drop Down Menu */}
        <SizingComponent productId={item.id} onSizeChange={setSelectedSize} />
        {/* <StyledButton
          $width="100%"
          $margin="10px 0px"
          $bgColor="#018849"
          $hoverBgColor="#006637"
          $textColor="white"
          $border="2px solid #018849"
          $borderRadius="0px"
          $hoverBorderColor="#006637"
          onClick={handleAddToCart}
        >
          Add to Bag
        </StyledButton> */}
        <StyledButton
          $width="100%"
          $margin="10px 0px"
          $bgColor="#018849"
          $hoverBgColor="#006637"
          $textColor="white"
          $border="2px solid #018849"
          $borderRadius="0px"
          $hoverBorderColor="#006637"
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              style={{
                border: "2px solid #fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                borderTopColor: "transparent",
                margin: "auto",
              }}
            />
          ) : isAdded ? (
            <FaCheck />
          ) : (
            "Add to Bag"
          )}
        </StyledButton>
        <Column $width="100%" $alignItems="flex-start">
          <StyledDiv>
            <StyledP $fontSize="12px" $textAlign="left" $margin="0px 0px">
              Free delivery on qualifying orders.
            </StyledP>
          </StyledDiv>
          <StyledDiv>
            <StyledP $fontSize="12px" $textAlign="left" $margin="0px 0px">
              Free Returns
            </StyledP>
          </StyledDiv>
        </Column>
        <AccordionComponent
          productId={item.id}
          additionalImages={item.additionalImageUrls}
        />
      </Column>
    </Container>
  );
};

// PropTypes for validation
ItemInfo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    additionalImageUrls: PropTypes.array,
    price: PropTypes.shape({
      current: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
    colour: PropTypes.string,
  }).isRequired,
};

export default ItemInfo;
