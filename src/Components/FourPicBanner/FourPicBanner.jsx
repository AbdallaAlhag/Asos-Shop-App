import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BannerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  height: ${({ $height }) => $height || "40vh"};
  width: 99vw;
  padding-top: 60px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 25vw;
`;

function FourPicBanner({ resource, height, click }) {
  return (
    <BannerDiv $height={height}>
      {click ? (
        <Link to={`/Shop/${resource[0].alt}`}>
          <StyledImg src={resource[0].src} alt={resource[0].alt} />
        </Link>
      ) : (
        <StyledImg src={resource[0].src} alt={resource[0].alt} />
      )}
      {click ? (
        <Link to={`/Shop/${resource[1].alt}`}>
          <StyledImg src={resource[1].src} alt={resource[1].alt} />
        </Link>
      ) : (
        <StyledImg src={resource[1].src} alt={resource[1].alt} />
      )}
      {click ? (
        <Link to={`/Shop/${resource[2].alt}`}>
          <StyledImg src={resource[2].src} alt={resource[2].alt} />
        </Link>
      ) : (
        <StyledImg src={resource[2].src} alt={resource[2].alt} />
      )}
      {click ? (
        <Link to={`/Shop/${resource[3].alt}`}>
          <StyledImg src={resource[3].src} alt={resource[3].alt} />
        </Link>
      ) : (
        <StyledImg src={resource[3].src} alt={resource[3].alt} />
      )}
    </BannerDiv>
  );
}

FourPicBanner.propTypes = {
  resource: PropTypes.array.isRequired,
  height: PropTypes.string,
  click: PropTypes.bool,
};

export default FourPicBanner;
