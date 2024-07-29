/* eslint-disable react/no-unescaped-entities */
import { Container, Content, TextLink } from "../../style/CommonComponents";
import {
  BottomInfoContainer,
  ContentColumn,
  LinkHeader,
  Pitch,
  AppButton,
  DownloadButton,
} from "./BottomInfoStyledComponents";

function BottomInfo() {
  const chunks = chunkArray(mensFashionItems.slice(0, 40), 10);
  return (
    <BottomInfoContainer>
      {/* Download part */}
      <Container $background="linear-gradient(90deg, #FF385C 0%, #F799BA 100%)">
        <Content
          $justifyContent="center"
          $gap="10px"
          $flexDirection="column"
          $padding="20px 0px"
        >
          <AppButton>The ASOS APP</AppButton>
          <DownloadButton>Download Now</DownloadButton>
        </Content>
      </Container>
      {/* Shop More */}
      <Container $color="black" $flexDirection="column">
        <LinkHeader>SHOP MORE</LinkHeader>
        <Content $justifyContent="center" $gap="200px" $padding="50px 0px">
          {chunks.map((chunk, index) => (
            <ContentColumn key={index}>
              {chunk.map((item, i) => (
                <TextLink key={i}>{item}</TextLink>
              ))}
            </ContentColumn>
          ))}
        </Content>
      </Container>
      {/* Description */}
      <Container>
        <Content $justifyContent="center" $padding="50px 0px">
          <Pitch>
            Level up your off-duty 'fits with ASOS, serving up on-trend menswear
            and accessories from your fave brands. Raise your layer game with
            elevated basics from Only & Sons ft. *all* those must-have closet
            essentials – from smart-casj polos to oversized tees and throw-on
            shirts in tonal hues. If you're scrolling for trousers and jeans,
            from on-trend cargos to classic chinos and denim, Pull&Bear delivers
            – while Jack & Jones’ edit of sneakers and office-ready footwear
            keeps your kicks on point (think Derbys, brogues and Chelsea boots
            to finish off the 'fit). For chill-beating styles, filter by The
            North Face for iconic puffers in colour-block hues and versatile
            monochromes. And for working up a sweat, Nike and New Balance have
            got athleisurewear wrapped up – with tech-focused performance wear
            guaranteed to wick moisture, and make those early-morning runs a
            breeze. Let’s scroll.
          </Pitch>
        </Content>
      </Container>
    </BottomInfoContainer>
  );
}

export default BottomInfo;

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const mensFashionItems = [
  "Men's Bucket Hats",
  "Men's Cross Body Bags",
  "Men's Shackets",
  "Men's Gray Jeans",
  "Men's Chinos",
  "Men's Sandals",
  "Men's Leather Sneakers",
  "Men's Cargo Shorts",
  "Slim Fit Suits",
  "Men's Oversized T-shirts",
  "Men's Sunglasses",
  "Men's Hoodies",
  "Men's Vests",
  "Men's Ripped jeans",
  "Men's Casual shirts",
  "Men's Sneakers",
  "Men's Nike Dunk",
  "Men's Black Shorts",
  "Men's Wedding Suits",
  "Men's Sweatpants",
  "Men's Gym Clothes",
  "Men's Sweatshirts",
  "Men's Black Jeans",
  "Men's Skinny Jeans",
  "Men's Linen Shirts",
  "Men's adidas Samba",
  "Men's White Sneakers",
  "Men's White Shorts",
  "Men's Sweater Vests",
  "Men's Shorts Sets",
  "Men's Backpacks",
  "Men's Denim jackets",
  "Men's Blue Jeans",
  "Men's Black Cargo Pants",
  "Men's Short Sleeve Shirts",
  "Men's Black Sneakers",
  "Men's Wide Shoes",
  "Men's Black Suits",
  "Men's Swim Shorts",
  "Men's Underwear",
];
