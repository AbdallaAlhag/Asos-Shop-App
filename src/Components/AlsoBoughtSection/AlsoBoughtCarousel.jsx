import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Content, Column } from "../../style/CommonComponents";
import Item from "../Item";

// Styled components
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
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

// Styled Slider component
const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: black; /* Change arrow color */
    font-size: 30px; /* Adjust arrow size */
  }

  .slick-dots li button:before {
    color: grey; /* Change dot color */
    font-size: 12px; /* Adjust dot size */
  }

  .slick-dots .slick-active button:before {
    color: black; /* Change color of active dot */
  }

  .slick-slide {
    padding: 10px; /* Adjust spacing around slides */
    display: flex;
    flex-direction: row;
  }

  .slick-slide div {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;
  }
`;

// SlickCarousel component
const AlsoBoughtCarousel = ({ data }) => {
  const sliderRef1 = useRef(null);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const imageChunks = chunkArray(data, 4);
  const mainSliderSettings = {
    arrows: true,
    // asNavFor: sliderRef2.current,
    // fade: true,
    dots: true,
  };

  return (
    <Content>
      <SliderWrapper>
        <StyledSlider
          {...mainSliderSettings}
          ref={(slider) => (sliderRef1.current = slider)}
          className="main-slider"
        >
          {imageChunks.map((chunk, chunkIndex) => (
            <Column key={`chunk-${chunkIndex}`} $justifyContent={"flex-start"}>
              {chunk.map((item) => (
                <div key={item.id}>
                  {/* <Image src={item.imageUrl} alt={item.name} /> */}
                  <Item
                    key={item.id}
                    item={item}
                    height={"auto"}
                    width={"178px"}
                    title={true}
                  />
                </div>
              ))}
            </Column>
          ))}
        </StyledSlider>
      </SliderWrapper>
    </Content>
  );
};

AlsoBoughtCarousel.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.shape({
      current: PropTypes.number.isRequired,
      text: PropTypes.string, // Optional if you use this
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlsoBoughtCarousel;
