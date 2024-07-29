import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import VideoBanner from "../../Components/VideoBanner";
import SectionTitle from "../../Components/SectionTitle";
import NewIn from "../../Components/NewIn";
import StyleFeed from "../../Components/StyleFeed";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";
import newInInfo from "./newInInfo";
import styleFeed from "./StyleFeed";
import CarouselArray from "./CarouselArray";

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
      <SectionTitle
        justifyContent="center"
        Title="ASOS LOOKS GOOD ON YOU"
      ></SectionTitle>
      <Carousel array={CarouselArray}></Carousel>
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
      <VideoBanner videoSrc={"src/assets/Men/brandsToKnow.mp4"}></VideoBanner>
      {/* New In */}
      <SectionTitle Title="New In" justifyContent="flex-start"></SectionTitle>
      <NewIn newInInfo={newInInfo}></NewIn>

      {/* The style Feed */}
      <SectionTitle
        Title="The style Feed"
        justifyContent="flex-start"
      ></SectionTitle>
      <StyleFeed styleFeedArray={styleFeed}></StyleFeed>
      <BottomInfo></BottomInfo>
      <Footer></Footer>
    </Page>
  );
}

export default Men;
