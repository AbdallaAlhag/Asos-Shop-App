import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ItemInfo from "../../Components/ItemInfo";
import { useLocation } from "react-router-dom";
import AlsoLikeSection from "../../Components/AlsoLikeSection/AlsoLikeSection";
import styled from "styled-components";

const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Checkout = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Destructure the state object
  if (!data) {
    return <p>No item data found</p>;
  }
  // console.log(data);
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Container>
        <Content
          $justifyContent="center"
          $gap="12px"
          $wrap="wrap"
          $padding="50px 0px"
          $width="50%"
        >
          {" "}
          <ItemInfo item={data}></ItemInfo>
          <Divider />
          <AlsoLikeSection item={data}></AlsoLikeSection>
          <Divider />
        </Content>
      </Container>
      <Footer></Footer>
    </Page>
  );
};
export default Checkout;
