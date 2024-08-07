import GlobalStyle from "../../style/GlobalStyles";
import { Page, StyledDiv, StyledP } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link, useParams } from "react-router-dom";
import catalog from "../../API/getCatagoriesData.json";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  &:hover {
    background-color: #eeeeee;
  }
`;


function Brand() {
  const { gender } = useParams();
  const data =
    gender === "Women"
      ? catalog.data.brands[2].children
      : catalog.data.brands[0].children;
  const dataInfo = data.map((item) => [
    item.content.title,
    item.link.categoryId,
  ]);


  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <StyledDiv $flexDirection="column">
        <StyledP
          $fontWeight="bold"
          $fontSize="20px"
        >{`A-Z ${gender}s Brands`}</StyledP>
        <StyledDiv
          $flexDirection="column"
          $alignItems="flex-start"
          $width="70%"
        >
          {dataInfo.map((link, index) => (
            <StyledLink key={index} to={`/Shop/${gender}-all-${link[1]}`}>
              <StyledP $textAlign="left" $padding="20px 0px" $margin="10px 0px">
                {link[0]}
              </StyledP>
            </StyledLink>
          ))}
        </StyledDiv>
      </StyledDiv>
      <Footer></Footer>
    </Page>
  );
}

export default Brand;
