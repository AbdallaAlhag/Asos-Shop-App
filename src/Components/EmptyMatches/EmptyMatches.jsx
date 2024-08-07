/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  StyledP,
  StyledDiv,
  StyledImg,
} from "../../style/CommonComponents";
import { Link } from "react-router-dom";
import WomenImg from "../../assets/Home/WomenEmptySearch.webp";
import MenImg from "../../assets/Home/MenEmptySearch.webp";
import FaceAndBodyImg from "../../assets/Home/FaceAndBodyEmptySearch.webp";
const EmptyMatches = () => {
  return (
    <Container $flexDirection="column">
      <StyledDiv
        $backGroundColor="#edf1f7"
        $width="100%"
        $justifyContent="center"
        $flexDirection="column"
        $padding="20px"
        $margin="0px"
      >
        <StyledP $fontWeight="bold" $fontSize="28px">
          NOTHING MATCHES YOUR SEARCH
        </StyledP>
        <StyledP>
          But don't give up – check the spelling or try less specific search
          terms.
        </StyledP>
      </StyledDiv>
      <StyledDiv $flexDirection="column">
        <StyledP $fontSize="20px">Shop New in</StyledP>
        <StyledDiv>
          <Link to={`/Shop/Women-NewIn-27108`}>
            <StyledDiv $flexDirection="column">
              <StyledImg src={WomenImg} alt={"Women-NewIn"}></StyledImg>
              <StyledP>WOMEN</StyledP>
            </StyledDiv>
          </Link>
          <Link to={`/Shop/Men-NewIn-27110`}>
            <StyledDiv $flexDirection="column">
              <StyledImg src={MenImg} alt={"Men-NewIn"}></StyledImg>
              <StyledP>MEN</StyledP>
            </StyledDiv>
          </Link>
          <Link to={`/Shop/Women-NewInFace&Body-2426`}>
            <StyledDiv $flexDirection="column">
              <StyledImg
                src={FaceAndBodyImg}
                alt={"Women-NewInFace&Body"}
              ></StyledImg>
              <StyledP>FACE + BODY</StyledP>
            </StyledDiv>
          </Link>
        </StyledDiv>
      </StyledDiv>
    </Container>
  );
};

export default EmptyMatches;
