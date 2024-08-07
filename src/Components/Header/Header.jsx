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
import {
  mdiAccountOutline,
  mdiHeartOutline,
  mdiShoppingOutline,
} from "@mdi/js";
import SearchBar from "../SearchBar/";
import Tooltip from "../Tooltip";

function Header() {
  const bottomLinks = [
    "TRENDING",
    "New in",
    "Clothing",
    "Shoes",
    "Accessories",
    "Brands",
    "Sportswear",
    "Plus & Tall",
    "Tailoring",
    "Marketplace",
    "Sale",
  ];

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
          <SearchBar placeholder="Search for items and brands" />
          <Tooltip content="Page not implemented">
            <MidButton>
              <Icon
                path={mdiAccountOutline}
                title="User Profile"
                size={2}
                color="white"
              />
            </MidButton>
          </Tooltip>
          <Tooltip content="Page not implemented">
            <MidButton>
              <Icon path={mdiHeartOutline} size={2} color="white" />
            </MidButton>
          </Tooltip>
          <Link to="/Cart">
            <MidButton>
              <Icon path={mdiShoppingOutline} size={2} color="white" />
            </MidButton>
          </Link>
        </Content>
      </Container>
      <Container $backgroundColor="#525050">
        <Content $gap="10px" $width="70%">
          {bottomLinks.map((link, index) => (
            <Tooltip key={index} content="Tab not implemented">
              <LowButton>
                <TabText>{link}</TabText>
              </LowButton>
            </Tooltip>
          ))}
        </Content>
      </Container>
    </PageContainer>
  );
}

export default Header;
