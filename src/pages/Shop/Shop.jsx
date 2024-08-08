/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/";
import Item from "../../Components/Item";

import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import { useParams, useLocation } from "react-router-dom";
import { StyledP } from "../../style/CommonComponents";

import ShopLoader from "../../Components/SkeletonLoader/ShopLoader";
import EmptyMatches from "../../Components/EmptyMatches/EmptyMatches";

function Shop() {
  const { shop } = useParams();
  const location = useLocation();
  const { state } = location;
  const searchResults = state?.data || [];

  // eslint-disable-next-line no-unused-vars
  const [gender, brand, categoryId] = category.split("-");

  const url =
    gender !== "search"
      ? `https://asos10.p.rapidapi.com/api/v1/getProductList?categoryId=${categoryId}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&offset=0&sort=recommended`
      : null;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  const { data, loading, error } = useFetchDataWithCache(url, options, 500); // 500ms debounce
  const items =
    gender === "search" ? searchResults : data?.data?.products || [];

  if (error) return <StyledP>Error: {error.message}</StyledP>;

  (loading);
  return (
    <Page>
      <GlobalStyle />
      <Header />
      {!items.length && gender === "search" && <EmptyMatches />}
      {loading && gender !== "search" ? (
        <ShopLoader />
      ) : (
        <Container>
          <Content
            $justifyContent="flex-start"
            $gap="12px"
            $wrap="wrap"
            $padding="50px 0px"
            $width="70%"
          >
            {items.map((item) => (
              <Item key={item.id} item={item} title={true} />
            ))}
          </Content>
        </Container>
      )}
      <Footer />
    </Page>
  );
}

export default Shop;
