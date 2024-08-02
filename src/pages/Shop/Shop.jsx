/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/";
import Item from "../../Components/Item";
import { v4 as uuidv4 } from "uuid";

import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import { useParams } from "react-router-dom";

function Shop() {
  const { category } = useParams();
  const [gender, brand, categoryId] = category.split("-");
  console.log(brand, gender, categoryId);

  const url = `https://asos10.p.rapidapi.com/api/v1/getProductList?categoryId=${categoryId}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&offset=0&sort=recommended`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  const { data, loading, error } = useFetchDataWithCache(url, options, 500); // 500ms debounce

  const items = data?.data?.products || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!items || items.length === 0) return <p>No data available</p>;

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
          {/* {adidasBrand.map((item, index) => (
            <Item key={index} item={item} />
          ))} */}
          {items.map((item) => (
            <Item key={uuidv4()} item={item} />
          ))}
        </Content>
      </Container>
      <Footer></Footer>
    </Page>
  );
}

export default Shop;
