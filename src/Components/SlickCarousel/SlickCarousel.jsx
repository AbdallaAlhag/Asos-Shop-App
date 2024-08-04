import { useRef } from "react";
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
  object-fit: none;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
  object-fit: cover;
  margin-bottom: 5px;
`;

// SlickCarousel component
const SlickCarousel = ({ images, additionalImages }) => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const mainSliderSettings = {
    arrows: true,
    asNavFor: sliderRef2.current,
    fade: true,
  };

  const thumbnailSliderSettings = {
    arrows: false,
    asNavFor: sliderRef1.current,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
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
          ref={(slider) => (sliderRef1.current = slider)}
          className="main-slider"
        >
          {images.map((image, index) => (
            <div key={`main-slide-${index}`}>
              <Image src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
      {additionalImages && (
        <ThumbnailWrapper>
          <Slider
            {...thumbnailSliderSettings}
            ref={(slider) => (sliderRef2.current = slider)}
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
  additionalImages: PropTypes.arrayOf(PropTypes.string),
};

export default SlickCarousel;
