import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";

function Men() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"src/assets/Men/NewInSummer.webp"}
        altSRc={"New in Summer image"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Men/modernStaples.jpg"}
        altSRc={"Modern Staple Image"}
      ></Banner>
      {/* Asos looks good and Image carousel */}
      <Banner
        imgSrc={"src/assets/Men/yourMostHyped.webp"}
        altSRc={"Your Most hyped"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Men/topman.webp"}
        altSRc={"Topman Brand"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Men/disneyAsos.avif"}
        altSRc={"Disney Brand"}
      ></Banner>
      <Banner imgSrc={"src/assets/Men/nike.jpg"} altSRc={"Nike Brand"}></Banner>
      {/* <Banner
        imgSrc={"src/assets/Men/brandsToKnow.mp4"}
        altSRc={"Brands to know"}
      ></Banner> */}
      {/* New In */}
      {/* The style Feed */}
      <BottomInfo></BottomInfo>
      <Footer></Footer>
    </Page>
  );
}

export default Men;
