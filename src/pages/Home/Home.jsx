/* eslint-disable react/no-unescaped-entities */
import GlobalStyle from "../../style/GlobalStyles";
import { StyledButton, StyledDiv } from "../../style/CommonComponents";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import FourPicBanner from "../../Components/FourPicBanner/";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer/";
import { discountInfo, womensBrands, mensBrands } from "./Data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  top: 1000px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

function Home() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"src/assets/Home/thisIsAsos.webp"}
        altSRc={"New in Summer image"}
      ></Banner>
      <ButtonContainer>
        <Link to={`/Shop/Womens-New-27108`}>
          <StyledButton
            $borderRadius="0px"
            $hoverBorderColor="black"
            $padding="10px 25px"
            $fontWeight="bold"
            $fontSize="16px"
            $border="2px solid white"
          >
            SHOP WOMENS
          </StyledButton>
        </Link>
        <Link to={`/Shop/Mens-New-27110`}>
          <StyledButton
            $borderRadius="0px"
            $hoverBorderColor="black"
            $padding="10px 35px"
            $fontWeight="bold"
            $fontSize="16px"
            $border="2px solid white"
          >
            SHOP MENS
          </StyledButton>
        </Link>
      </ButtonContainer>
      <FourPicBanner resource={discountInfo} click={false}></FourPicBanner>
      <SectionTitle
        justifyContent="center"
        Title="The Biggest Labels"
      ></SectionTitle>
      <FourPicBanner
        resource={womensBrands}
        height={"70vh"}
        click={true}
      ></FourPicBanner>
      <StyledDiv $justifyContent="center">
        <Link to={"/Brand/Women"}>
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
        </Link>
      </StyledDiv>
      <FourPicBanner
        resource={mensBrands}
        height={"70vh"}
        click={true}
      ></FourPicBanner>
      <StyledDiv $justifyContent="center">
        <Link to={"/Brand/Men"}>
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
        </Link>
      </StyledDiv>
      <Footer></Footer>
    </Page>
  );
}

export default Home;
