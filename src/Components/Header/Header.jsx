import {
  HeaderContainer,
  Container,
  Content,
  InnerDiv,
  MidButton,
  LowButton,
  LinkText,
  TabText,
} from "./StyledComponents";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountOutline } from "@mdi/js";
import { mdiHeartOutline } from "@mdi/js";
import { mdiShoppingOutline } from "@mdi/js";
import SearchBar from "../SearchBar/";
// import { ReactComponent as AsosLogo } from "../../assets/AsosLogo.svg";

function Header() {
  return (
    <HeaderContainer>
      <Container $backgroundColor="#f8f8f8" $color="black">
        <Content $justifyContent="flex-end">
          <InnerDiv>Marketplace</InnerDiv>
          <InnerDiv>Help & FAQs</InnerDiv>
          <InnerDiv>USA</InnerDiv>
        </Content>
      </Container>
      <Container $backgroundColor="#2d2d2d">
        <Content>
          {/* <AsosLogo width={50} height={50} /> */}
          <MidButton>
            <Link to="/Women"></Link>
          </MidButton>
          <MidButton>
            <Link to="/Women">
              <LinkText>Women</LinkText>
            </Link>
          </MidButton>
          <MidButton>
            <Link to="/">
              <LinkText>Men</LinkText>
            </Link>
          </MidButton>
          {/* I should style this some time */}
          <SearchBar placeholder="Search for a fruit..." />
          <Icon
            path={mdiAccountOutline}
            title="User Profile"
            size={1}
            color="white"
          />
          <Icon path={mdiHeartOutline} size={1} color="white" />
          <Icon path={mdiShoppingOutline} size={1} color="white" />
        </Content>
      </Container>
      <Container $backgroundColor="#525050">
        <Content $gap="10px">
          <LowButton>
            <TabText>Trending</TabText>
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
    </HeaderContainer>
  );
}

export default Header;

// // Usage example:
// const App = () => {
//   const data = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
//   return (
//     <div>
//       <MuiSearchBar placeholder="Search for a fruit..." data={data} />
//     </div>
//   );
// };
