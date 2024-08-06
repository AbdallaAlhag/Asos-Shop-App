import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledImg } from "../../style/CommonComponents";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`;

const CustomCarousel = styled(Carousel)`
  .control-dots {
    bottom: 10px; /* Adjust as needed */
  }

  .control-dots .dot {
    width: 20px; /* Bigger dots */
    height: 20px; /* Bigger dots */
    margin: 0 8px; /* Adjust spacing */
  }

  .control-prev.control-arrow,
  .control-next.control-arrow {
    background: transparent;
    width: 50px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    z-index: 2;
  }

  .control-prev.control-arrow:before,
  .control-next.control-arrow:before {
    font-size: 30px; /* Bigger arrows */
    color: #000; /* Change color if needed */
  }

  .control-prev.control-arrow {
    left: 10px;
  }

  .control-next.control-arrow {
    right: 10px; /* Position arrow on the right */
  }
`;

const CarouselComponent = ({ array }) => {
  const width = "24vw";
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };


  const chunks = chunkArray(array, 4);
  return (
    <CustomCarousel
      infiniteLoop
      autoPlay
      stopOnHover
      showArrows
      showStatus={false} // Hide the status indicators
      showIndicators
      showThumbs={false} // Disable thumbnail generation
      swipeable
      emulateTouch
    >
      {chunks.map((chunk, chunkIndex) => (
        <CarouselContent key={chunkIndex}>
          {chunk.map((src, index) => (
            // <Link to={`/Checkout/${src[1]}`} key={index}>
              <StyledImg
                key={index}
                $width={width}
                $userSelect="none"
                $height="auto"
                src={src[0]}
                alt={`Carousel Image ${chunkIndex * 4 + index + 1}`}
              />
            // </Link>
          ))}
        </CarouselContent>
      ))}
    </CustomCarousel>
  );
};

CarouselComponent.propTypes = {
  array: PropTypes.array.isRequired,
};

export default CarouselComponent;
