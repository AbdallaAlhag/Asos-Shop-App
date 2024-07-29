/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";

function Women() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"src/assets/Women/unrealFinds.jpg"}
        altSRc={"Unreal Finds, Unreal Summer"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Women/summerDresses.webp"}
        altSRc={"Summer dresses"}
      ></Banner>
      {/* Asos looks good and Image carousel */}
      <Banner
        imgSrc={"src/assets/Women/topshop.webp"}
        altSRc={"TopShop"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Women/yourMostHypedWomen.webp"}
        altSRc={"Your most hyped"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Women/MangoBrand.avif"}
        altSRc={"Mango Brand"}
      ></Banner>
      <Banner
        imgSrc={"src/assets/Women/reclaimedVintage.webp"}
        altSRc={"Reclaimed Vintage Brand"}
      ></Banner>
      {/* New In Section*/}
      <Banner
        imgSrc={"src/assets/Men/disneyAsos.avif"}
        altSRc={"Disney Brand"}
      ></Banner>
            <Banner
        imgSrc={"src/assets/Women/ghdDuetBlowdryBrush.avif"}
        altSRc={"ghd Duet Blowdry Brush"}
      ></Banner>
      {/* The Style Feeds Section */}
      <BottomInfo></BottomInfo>
      <Footer></Footer>
    </Page>
  );
}

export default Women;

// *header     (DONE)
// *Banner (DONE)
// *Looks good on your
// *New In
// *style feed
// - Video Banner for men.
// *as seen on me (DONE)
// *Download app (DONE)
// *Shop More (DONE)
