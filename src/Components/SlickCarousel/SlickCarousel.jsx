import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Content } from "../../style/CommonComponents";

// Styled components
const SliderWrapper = styled.div`
  max-width: 500px;
  height: auto;

  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 101px;
  height: auto;
  cursor: pointer;
  object-fit: cover;
  margin-bottom: 5px;
`;

// SlickCarousel component
const SlickCarousel = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const mainSliderSettings = {
    arrows: true,
    asNavFor: nav2,
    fade: true,
    draggable: false, // Optional: Disable dragging
  };

  const thumbnailSliderSettings = {
    arrows: false,
    asNavFor: nav1,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
  };

  return (
    <Content
      $maxWidth="600px"
      $height="400px"
      $flexDirection="row-reverse"
      $gap="0px"
    >
      <SliderWrapper>
        <Slider
          {...mainSliderSettings}
          ref={(slider) => (sliderRef1 = slider)}
          className="main-slider"
        >
          {images.map((image, index) => (
            <div key={`main-slide-${index}`}>
              <Image src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
      {images.length > 1 && (
        <ThumbnailWrapper>
          <Slider
            {...thumbnailSliderSettings}
            ref={(slider) => (sliderRef2 = slider)}
            className="thumbnail-slider"
          >
            {images.map((image, index) => (
              <div key={`thumbnail-${index}`}>
                <Thumbnail src={image} alt={`Thumbnail ${index}`} />
              </div>
            ))}
          </Slider>
        </ThumbnailWrapper>
      )}
    </Content>
  );
};

SlickCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  // additionalImages: PropTypes.arrayOf(PropTypes.string),
};

export default SlickCarousel;
