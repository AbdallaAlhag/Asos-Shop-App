import {
  Container,
  Content,
  Column,
  StyledImg,
  StyledP,
  StyledButton,
  StyledDiv
} from "../../style/CommonComponents";
import PropTypes from "prop-types";
import AccordionComponent from "./AccordionComponent";

const ItemInfo = ({ item }) => {
  const completeImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;
  return (
    <Container>
      <Content>
        {<StyledImg src={completeImageUrl} alt={item.name}></StyledImg>}
      </Content>
      <Column>
        <StyledP>{item.name}</StyledP>
        <StyledP>{item.price}</StyledP>
        <StyledDiv $backGroundColor="#cde2f5">
          <StyledP>
            {/* icon */}
            PSST! NEW HERE? Get 10% off almost everything!* With code:{" "}
            <strong>HIFRIEND</strong>
          </StyledP>
        </StyledDiv>
        <StyledP>
          <strong>COLOR</strong> {item.color}
        </StyledP>
        {/* Drop Down Menu */}
        <StyledButton>
          {/* Icon */}
          NOTIFY ME
        </StyledButton>
        {/* Heart Button*/}
        <Column>
          <StyledDiv>
            {/* Truck Delivery Icon */}
            <StyledP>Free delivery on qualifying orders.</StyledP>
          </StyledDiv>
          <StyledDiv>
            {/* Return Icon */}
            <StyledP>Free Returns</StyledP>
          </StyledDiv>
        </Column>
        <AccordionComponent ProductId={item.id}/>
      </Column>
    </Container>
  );
};

ItemInfo.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ItemInfo;
