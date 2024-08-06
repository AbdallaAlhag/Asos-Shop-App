import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BannerDiv = styled.div`
  height: 100vh;
  width: 99.1vw;
  padding: 30px 0px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 100vw;
`;

const Banner = ({ imgSrc, imgAlt, linkSrc }) => {
  return (
    <BannerDiv>
      {linkSrc ? (
        <Link to={`/Shop/${linkSrc}`}>
          <StyledImg src={imgSrc} alt={imgAlt} />
        </Link>
      ) : (
        <StyledImg src={imgSrc} alt={imgAlt} />
      )}
    </BannerDiv>
  );
};

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  linkSrc: PropTypes.string,
};

export default Banner;
