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

  // if (!data) {
  //   return <StyledP>Loading...</StyledP>;
  // }
  if (!data) {
    return <StyledP>No data available</StyledP>;
  }
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
