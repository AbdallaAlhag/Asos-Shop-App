import styled from "styled-components";
import PropTypes from "prop-types";

const BannerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  height: ${({$height}) => $height || '40vh'};
  width: 99vw;
  padding-top: 60px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 25vw;
`;

function FourPicBanner({ resource, height }) {
  return (
    <BannerDiv $height={height}>
      <StyledImg src={resource[0].src} alt={resource[0].alt} />
      <StyledImg src={resource[1].src} alt={resource[1].alt} />
      <StyledImg src={resource[2].src} alt={resource[2].alt} />
      <StyledImg src={resource[3].src} alt={resource[3].alt} />
    </BannerDiv>
  );
}

FourPicBanner.propTypes = {
  resource: PropTypes.array.isRequired,
  height: PropTypes.string,
};

export default FourPicBanner;
