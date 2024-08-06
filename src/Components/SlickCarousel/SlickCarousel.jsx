import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Content } from "../../style/CommonComponents";
import LazyLoad from "react-lazyload";

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

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
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
          ref={sliderRef1}
          className="main-slider"
        >
          {images.map((image, index) => (
            <div key={`main-slide-${index}`}>
              <LazyLoad width={500} height={500}>
                <Image src={image} alt={`Slide ${index}`} />
              </LazyLoad>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
      {images.length > 1 && (
        <ThumbnailWrapper>
          <Slider
            {...thumbnailSliderSettings}
            ref={sliderRef2}
            className="thumbnail-slider"
          >
            {images.map((image, index) => (
              <div key={`thumbnail-${index}`}>
                <LazyLoad width={101} height={130}>
                  <Thumbnail src={image} alt={`Thumbnail ${index}`} />
                </LazyLoad>
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
};

export default SlickCarousel;
