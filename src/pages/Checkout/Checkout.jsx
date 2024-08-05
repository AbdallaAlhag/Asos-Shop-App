import GlobalStyle from "../../style/GlobalStyles";
import {
  Page,
  Container,
  Content,
  StyledP,
} from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ItemInfo from "../../Components/ItemInfo";
import { useLocation } from "react-router-dom";
import AlsoLikeSection from "../../Components/AlsoLikeSection/AlsoLikeSection";
import styled from "styled-components";
import AlsoBoughtSection from "../../Components/AlsoBoughtSection/AlsoBoughtSection";

// Code for single product items but i would have to restructure multiple files
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetchDataWithCache from "../../API/useFetchDataWithCache";

const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Checkout = () => {
  const location = useLocation();
  const { data } = location.state || {};
  // Code for single product items but i would have to restructure multiple files

  // const { data: locationData } = location.state || {};
  // const { category } = useParams();

  // const [data, setData] = useState(locationData);

  // const [gender, brand, categoryId] = category ? category.split("-") : [];

  // const url = categoryId
  //   ? `https://asos2.p.rapidapi.com/products/v4/detail?id=${categoryId}&lang=en-US&store=US&sizeSchema=US&currency=USD`
  //   : null;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
  //     "x-rapidapi-host": "asos2.p.rapidapi.com",
  //   },
  // };
  // const {
  //   data: apiData,
  //   loading,
  //   error,
  // } = useFetchDataWithCache(url, options, 500);
  // useEffect(() => {
  //   if (!locationData && apiData) {
  //     setData(apiData || null);
  //   }
  // }, [locationData, apiData]);

  // if (!data && loading) {
  //   return (
  //     <StyledP>
  //       Loading... {gender} {brand}
  //     </StyledP>
  //   );
  // }

  // if (!data && error) {
  //   return <StyledP>Error: {error.message}</StyledP>;
  // }

  if (!data) {
    return <StyledP>Loading...</StyledP>;
  }
  if (!data) {
    return <StyledP>No data available</StyledP>;
  }
  console.log(data);
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <Container>
        <Content
          $justifyContent="center"
          $gap="12px"
          $wrap="wrap"
          $padding="50px 0px"
          $width="50%"
        >
          <ItemInfo item={data} />
          <Divider />
          <AlsoLikeSection itemId={data.id} />
          <Divider />
          <AlsoBoughtSection itemId={data.id} />
        </Content>
      </Container>
      <Footer />
    </Page>
  );
};

export default Checkout;
