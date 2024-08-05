import { Container, Column } from "../../style/CommonComponents";
import { StyledImg, ImgTitle } from "./NewInStyled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewIn = ({ newInInfo }) => {
  return (
    <Container
      $justifyContent="space-around"
      $flexDirection="row"
      $color="black"
      $height="50vh"
    >
      {newInInfo.map((item, index) => (
        <Column key={index}>
          <Link to={item[2] ? `/Shop/${item[2]}` : '#'}>
            <StyledImg src={item[0]} alt={item[1]} />
            <ImgTitle>{item[1]}</ImgTitle>
          </Link>
        </Column>
      ))}
    </Container>
  );
};


NewIn.propTypes = {
  newInInfo: PropTypes.array.isRequired,
};

export default NewIn;
