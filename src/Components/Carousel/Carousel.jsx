import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledImg } from "../../style/CommonComponents";
import styled from "styled-components";
import PropTypes from "prop-types";


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
  return (
    <CustomCarousel
      infiniteLoop
      autoPlay="true"
      stopOnHover="true"
    >
      <CarouselContent autoPlay infiniteLoop>
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[0]}
        />
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[1]}
        />
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[2]}
        />
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[3]}
        />
      </CarouselContent>
      <CarouselContent>
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[4]}
        />
        <StyledImg
          $userSelect="none"
          $width={width}
          $height="auto"
          src={array[5]}
        />
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[6]}
        />
        <StyledImg
          $width={width}
          $userSelect="none"
          $height="auto"
          src={array[7]}
        />
      </CarouselContent>
      <CarouselContent>
        <StyledImg
          $userSelect="none"
          $width={width}
          $height="auto"
          src={array[8]}
        />
        <StyledImg
          $width={width}
          $height="auto"
          $userSelect="none"
          src={array[9]}
        />
        <StyledImg
          $width={width}
          $height="auto"
          $userSelect="none"
          src={array[10]}
        />
        <StyledImg
          $width={width}
          $height="auto"
          $userSelect="none"
          src={array[11]}
        />
      </CarouselContent>
    </CustomCarousel>
  );
};

CarouselComponent.propTypes = {
    array: PropTypes.array.isRequired,
  };

export default CarouselComponent;
