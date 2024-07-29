import styled from "styled-components";
import PropTypes from "prop-types";

const BannerDiv = styled.div`
  height: 100vh;
  width: 99vw;
  padding: 30px 0px;
`;

const StyledVideo = styled.video`
  height: 100%;
  width: auto;
`;

function VideoBanner({ videoSrc }) {
  return (
    <BannerDiv>
      <StyledVideo autoPlay controls loop playsInline>
      <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </BannerDiv>
  );
}

VideoBanner.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default VideoBanner;
