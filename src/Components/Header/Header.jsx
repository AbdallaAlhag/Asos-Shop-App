import {
  InnerDiv,
  MidButton,
  LowButton,
  LinkText,
  TabText,
  StyledAsosLogo,
  TopButton,
} from "./HeaderStyledComponents";
import {
  PageContainer,
  Container,
  Content,
} from "../../style/CommonComponents";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountOutline } from "@mdi/js";
import { mdiHeartOutline } from "@mdi/js";
import { mdiShoppingOutline } from "@mdi/js";
import SearchBar from "../SearchBar/";

function Header() {
  return (
    <PageContainer>
      <Container $backgroundColor="#f8f8f8" $color="black">
        <Content $width="70%" $justifyContent="flex-end">
          <TopButton>
            <InnerDiv>Marketplace</InnerDiv>
          </TopButton>
          <TopButton>
            <InnerDiv>Help & FAQs</InnerDiv>
          </TopButton>
          <TopButton>
            <InnerDiv>USA</InnerDiv>
          </TopButton>
        </Content>
      </Container>
      <Container $backgroundColor="#2d2d2d">
        <Content $width="70%">
          <MidButton>
            <Link to="/">
              <StyledAsosLogo color="white" width={80} height={50} />
            </Link>
          </MidButton>
          <MidButton>
            <Link to="/Women">
              <LinkText>Women</LinkText>
            </Link>
          </MidButton>
          <MidButton>
            <Link to="/Men">
              <LinkText>Men</LinkText>
            </Link>
          </MidButton>
          {/* I should style this some time */}
          <SearchBar placeholder="Search for items and brands" />
          <MidButton>
            <Icon
              path={mdiAccountOutline}
              title="User Profile"
              size={2}
              color="white"
            />
          </MidButton>
          <MidButton>
            <Icon path={mdiHeartOutline} size={2} color="white" />
          </MidButton>
          <Link to="/Cart">
            <MidButton>
              <Icon path={mdiShoppingOutline} size={2} color="white" />
            </MidButton>
          </Link>
        </Content>
      </Container>
      <Container $backgroundColor="#525050">
        <Content $gap="10px" $width="70%">
          <LowButton>
            <TabText>TRENDING</TabText>
          </LowButton>
          <LowButton>
            <TabText>New in</TabText>
          </LowButton>
          <LowButton>
            <TabText>Clothing</TabText>
          </LowButton>
          <LowButton>
            <TabText>Shoes</TabText>
          </LowButton>
          <LowButton>
            <TabText>Accessories</TabText>
          </LowButton>
          <LowButton>
            <TabText>Brands</TabText>
          </LowButton>
          <LowButton>
            <TabText>Sportswear</TabText>
          </LowButton>
          <LowButton>
            <TabText>Plus & Tall</TabText>
          </LowButton>
          <LowButton>
            <TabText>Tailoring</TabText>
          </LowButton>
          <LowButton>
            <TabText>Marketplace</TabText>
          </LowButton>
          <LowButton>
            <TabText>Sale</TabText>
          </LowButton>
        </Content>
      </Container>
    </PageContainer>
  );
}

export default Header;

// // Usage example:
// const App = () => {
//   const data = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
//   return (
//     <div>
//       <MuiSearchBar placeholder="..." data={data} />
//     </div>
//   );
// };
