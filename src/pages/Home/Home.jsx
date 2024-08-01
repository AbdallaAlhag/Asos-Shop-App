/* eslint-disable react/no-unescaped-entities */
import GlobalStyle from "../../style/GlobalStyles";
import { StyledButton } from "../../style/CommonComponents";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import FourPicBanner from "../../Components/FourPicBanner/";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer/";
import { discountInfo, womensBrands, mensBrands } from "./Data";

function Home() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"src/assets/Home/thisIsAsos.webp"}
        altSRc={"New in Summer image"}
      ></Banner>
      <FourPicBanner resource={discountInfo}></FourPicBanner>
      <SectionTitle
        justifyContent="center"
        Title="The Biggest Labels"
      ></SectionTitle>
      <FourPicBanner resource={womensBrands} height={"70vh"}></FourPicBanner>
      <StyledButton
        $margin="70px auto"
        $borderRadius="0px"
        $hoverBorderColor="white"
        $padding="20px 40px"
        $fontWeight="bold"
        $fontSize="18px"
      >
        SHOP WOMEN'S BRANDS
      </StyledButton>
      <FourPicBanner resource={mensBrands} height={"70vh"}></FourPicBanner>
      <StyledButton
        $margin="70px auto"
        $borderRadius="0px"
        $hoverBorderColor="white"
        $padding="20px 40px"
        $fontWeight="bold"
        $fontSize="18px"
      >
        SHOP MEN'S BRANDS
      </StyledButton>
      <Footer></Footer>
    </Page>
  );
}

export default Home;
