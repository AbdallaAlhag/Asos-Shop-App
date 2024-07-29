import {
  Container,
  Content,
  StyledP,
  StyledButton,
} from "../../style/CommonComponents";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  height: auto;
  width: 24.7vw;
`;

const StyleFeed = ({ styleFeedArray }) => {
  return (
    <Container $flexDirection="column">
      <Content $alignItems="flex-start" $flexDirection="row" $gap="2px">
        <StyledImg src={styleFeedArray[0][0]} alt={styleFeedArray[0][1]} />
        <StyledImg src={styleFeedArray[1][0]} alt={styleFeedArray[1][1]} />
        <StyledImg src={styleFeedArray[2][0]} alt={styleFeedArray[2][1]} />
        <StyledImg src={styleFeedArray[3][0]} alt={styleFeedArray[3][1]} />
      </Content>
      <StyledP $margin="30px" $fontSize='20px'>
        Discover more outfit ideas, editor picks and Face + Body tips on the
        Style Feed
      </StyledP>
      <StyledButton
        $padding="10px 90px"
        $fontSize='20px'
        $fontWeight='bold'
        $bgColor="white"
        $borderRadius="0px"
        $margin='30px'
        $hoverBgColor='black'
        $hoverTextColor='white'
      >
        READ NOW
      </StyledButton>
    </Container>
  );
};

StyleFeed.propTypes = {
  styleFeedArray: PropTypes.array.isRequired,
};

export default StyleFeed;
