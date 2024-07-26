import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";

function Men() {
  return (
      <Page>
        <GlobalStyle />
        <Header></Header>
        <BottomInfo></BottomInfo>
        <Footer></Footer>
      </Page>
  );
}

export default Men;
