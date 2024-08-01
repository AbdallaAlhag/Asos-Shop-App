import { Container, Column } from "../../style/CommonComponents";
import { StyledImg, ImgTitle } from "./NewInStyled";
import PropTypes from "prop-types";

const NewIn = ({ newInInfo }) => {
  return (
    <Container
      $justifyContent="space-around"
      $flexDirection="row"
      $color="black"
      $height="50vh"
    >
      <Column>
        <StyledImg src={newInInfo[0][0]} alt={newInInfo[0][1]}></StyledImg>
        <ImgTitle>{newInInfo[0][1]}</ImgTitle>
      </Column>

      <Column>
        <StyledImg src={newInInfo[1][0]} alt={newInInfo[1][1]}></StyledImg>
        <ImgTitle>{newInInfo[1][1]}</ImgTitle>
      </Column>

      <Column>
        <StyledImg src={newInInfo[2][0]} alt={newInInfo[2][1]}></StyledImg>
        <ImgTitle>{newInInfo[2][1]}</ImgTitle>
      </Column>

      <Column>
        <StyledImg src={newInInfo[3][0]} alt={newInInfo[3][1]}></StyledImg>
        <ImgTitle>{newInInfo[3][1]}</ImgTitle>
      </Column>

      <Column>
        <StyledImg src={newInInfo[4][0]} alt={newInInfo[4][1]}></StyledImg>
        <ImgTitle>{newInInfo[4][1]}</ImgTitle>
      </Column>

      <Column>
        <StyledImg src={newInInfo[5][0]} alt={newInInfo[5][1]}></StyledImg>
        <ImgTitle>{newInInfo[5][1]}</ImgTitle>
      </Column>
    </Container>
  );
};

NewIn.propTypes = {
  newInInfo: PropTypes.array.isRequired,
};

export default NewIn;
