import GlobalStyle from "../../style/GlobalStyles";
import {
  Page,
  Container,
  Content,
  StyledP,
  StyledDiv,
} from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useSave } from "./SaveContext";
import SavedItem from "../../Components/SavedItem/SavedItem";

const Save = () => {
  const { saveItems } = useSave();
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <Container $flexDirection="column">
        <StyledDiv
          $width="100%"
          $backGroundColor="#eeeeee"
          $justifyContent="center"
          $margin='0px'
        >
          <StyledP $fontWeight="bold" $fontSize="28px" $padding='20px'>
            Saved Items
          </StyledP>
        </StyledDiv>
        <StyledDiv
          $width="70%"
          $justifyContent="flex-start"
          $alignItems="flex-start"
          $flexDirection="column"
          $padding="20px"
          $margin="0px"
        >
          {saveItems.map((save, index) => (
            <SavedItem key={index} data={save} />
          ))}
        </StyledDiv>
        <Content></Content>
      </Container>
      <Footer />
    </Page>
  );
};

export default Save;
