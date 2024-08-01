/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/";
import Item from "../../Components/Item";
// import { fetchProductList, fetchCategories } from "../../API/test";
// import categoryData from "../../API/getCatagoriesData.json";
import AdidasData from "../../API/MenData/AdidasData.json";

function Shop() {
  //   const brands = categoryData.data.brands;
  const adidasBrand = AdidasData.data.products;
  // This should return the first brand

  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Container>
        <Content
          $justifyContent="flex-start"
          $gap="12px"
          $wrap="wrap"
          $padding="50px 0px"
          $width="70%"
        >
          {adidasBrand.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </Content>
      </Container>
      <Footer></Footer>
    </Page>
  );
}

export default Shop;
