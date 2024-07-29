import styled from "styled-components";
import PropTypes from "prop-types";

const BannerDiv = styled.div`
  height: 100vh;
  width: 99vw;
  padding: 30px 0px;
`;

const StyledImg = styled.img`
  height: 100%;
  width: auto;
`;

const Banner = ({ imgSrc, imgAlt }) => {
  return (
    <BannerDiv>
      <StyledImg src={imgSrc} alt={imgAlt} />
    </BannerDiv>
  );
};

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default Banner;
