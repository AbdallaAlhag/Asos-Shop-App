import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ItemInfo from "../../Components/ItemInfo";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Destructure the state object
  if (!data) {
    return <p>No item data found</p>;
  }
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Container>
        <Content
          $justifyContent="center"
          $gap="12px"
          $wrap="wrap"
          $padding="50px 0px"
          $width="50%"
        >
          {" "}
          <ItemInfo item={data}></ItemInfo>
        </Content>
      </Container>
      <Footer></Footer>
    </Page>
  );
};
export default Checkout;
