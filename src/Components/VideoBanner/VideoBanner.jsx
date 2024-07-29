import styled from "styled-components";
import PropTypes from "prop-types";

const BannerDiv = styled.div`
  height: 100vh;
  width: 99vw;
  padding: 30px 0px;
`;

const StyledVideo = styled.video`
  height: auto;
  width: 99vw;
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

// VideoBanner.defaultProps = {
//   videoWidth: "98vw",
// };

export default VideoBanner;
