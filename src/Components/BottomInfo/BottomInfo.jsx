/* eslint-disable react/no-unescaped-entities */
import { Container, Content } from "../../style/CommonComponents";
import {
  BottomInfoContainer,
  ContentColumn,
  LinkHeader,
  Pitch,
  AppButton,
  DownloadButton,
} from "./BottomInfoStyledComponents";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BottomInfo({ useMen }) {
  const chunks = useMen
    ? chunkArray(mensFashionItems.slice(0, 40), 10)
    : chunkArray(womensFashionItems.slice(0, 40), 10);
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
                <Link key={i} to={`/Shop/${item[1]}`}>
                  {item[0]}
                </Link>
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
  ["Men's Bucket Hats", "men-jeans&trousers-20296"],
  ["Men's Cross Body Bags", "men-jeans&trousers-9265"],
  ["Men's Shackets", "men-jeans&trousers-50080"],
  ["Men's Gray Jeans", "men-jeans&trousers-4208"],
  ["Men's Chinos", "men-jeans&trousers-14051"],
  ["Men's Sandals", "men-jeans&trousers-6593"],
  ["Men's Leather Sneakers", "men-jeans&trousers-5775"],
  ["Men's Cargo Shorts", "men-jeans&trousers-25402"],
  ["Slim Fit Suits", "men-jeans&trousers-13532"],
  ["Men's Oversized T-shirts", "men-jeans&trousers-9171"],
  ["Men's Sunglasses", "men-jeans&trousers-6519"],
  ["Men's Hoodies", "men-jeans&trousers-15427"],
  ["Men's Vests", "men-jeans&trousers-14886"],
  ["Men's Ripped Jeans", "men-jeans&trousers-19790"],
  ["Men's Casual Shirts", "men-jeans&trousers-17410"],
  ["Men's Sneakers", "men-jeans&trousers-5775"],
  ["Men's Nike Dunk", "men-jeans&trousers-5775"],
  ["Men's Black Shorts", "men-jeans&trousers-7078"],
  ["Men's Wedding Suits", "men-jeans&trousers-14673"],
  ["Men's Sweatpants", "men-jeans&trousers-14274"],
  ["Men's Gym Clothes", "men-jeans&trousers-27183"],
  ["Men's Sweatshirts", "men-jeans&trousers-15426"],
  ["Men's Black Jeans", "men-jeans&trousers-4208"],
  ["Men's Skinny Jeans", "men-jeans&trousers-5403"],
  ["Men's Linen Shirts", "men-jeans&trousers-50539"],
  ["Men's adidas Samba", "men-jeans&trousers-5775"],
  ["Men's White Sneakers", "men-jeans&trousers-5775"],
  ["Men's White Shorts", "men-jeans&trousers-7078"],
  ["Men's Sweater Vests", "men-jeans&trousers-50416"],
  ["Men's Shorts Sets", "men-jeans&trousers-28291"],
  ["Men's Backpacks", "men-jeans&trousers-12888"],
  ["Men's Denim Jackets", "men-jeans&trousers-11908"],
  ["Men's Blue Jeans", "men-jeans&trousers-4208"],
  ["Men's Black Cargo Pants", "men-jeans&trousers-14273"],
  ["Men's Short Sleeve Shirts", "men-jeans&trousers-13802"],
  ["Men's Black Sneakers", "men-jeans&trousers-5775"],
  ["Men's Wide Shoes", "men-jeans&trousers-26280"],
  ["Men's Black Suits", "men-jeans&trousers-5678"],
  ["Men's Swim Shorts", "men-jeans&trousers-16328"],
  ["Men's Underwear", "men-jeans&trousers-20317"],
];

const womensFashionItems = [
  ["sportsBras", "women-sportsBras-27168"],
  ["blackDresses", "women-dresses-8799"],
  ["pinkDresses", "women-dresses-8799"],
  ["summerDresses", "women-dresses-10860"],
  ["momJeans", "women-jeans-20310"],
  ["rompers", "women-rompers-15166"],
  ["blackHeels", "women-heels-6461"],
  ["womensSandals", "women-sandals-6458"],
  ["womensNikeDunk", "women-sneakers-6456"],
  ["blackSkirts", "women-skirts-2639"],
  ["bridesmaidDresses", "women-dresses-15156"],
  ["blazerDresses", "women-dresses-8799"],
  ["redDresses", "women-dresses-8799"],
  ["weddingDresses", "women-dresses-25408"],
  ["wideLegJeans", "women-jeans-28017"],
  ["bras", "women-bras-6576"],
  ["goldHeels", "women-heels-6461"],
  ["womensSneakers", "women-sneakers-6456"],
  ["denimSkirts", "women-skirts-15177"],
  ["summerSkirts", "women-skirts-28015"],
  ["weddingGuestDresses", "women-dresses-13934"],
  ["goldDresses", "women-dresses-8799"],
  ["whiteDresses", "women-dresses-8799"],
  ["workDresses", "women-dresses-11464"],
  ["womensJumpsuits", "women-jumpsuits-15165"],
  ["plusSizeBridalDresses", "women-dresses-21606"],
  ["pinkHeels", "women-heels-6461"],
  ["womensAdidasSamba", "women-sneakers-6456"],
  ["maxiSkirts", "women-skirts-12910"],
  ["bikinis", "women-swimwear-10117"],
  ["promDresses", "women-dresses-11152"],
  ["greenDresses", "women-dresses-8799"],
  ["shirtDresses", "women-dresses-13053"],
  ["makeup", "women-makeup-5020"],
  ["blackJumpsuits", "women-jumpsuits-15165"],
  ["womensCowboyBoots", "women-boots-15170"],
  ["silverHeels", "women-heels-6461"],
  ["womensNewBalance530", "women-sneakers-6456"],
  ["miniSkirts", "women-skirts-12908"],
  ["womensSwimsuits", "women-swimwear-10118"],
];
