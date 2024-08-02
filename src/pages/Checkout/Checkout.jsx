import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ItemInfo from "../../Components/ItemInfo/ItemInfo";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Destructure the state object

  return (
        <Page>
          <GlobalStyle />
          <Header></Header>
          <Container>
            {data && <ItemInfo item={data}></ItemInfo>}
          </Container>
          <Footer></Footer>
        </Page>
      );
}
export default Checkout;
