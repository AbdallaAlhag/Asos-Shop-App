/* eslint-disable react/no-unescaped-entities */
import { Container, Content, TextLink } from "../../style/CommonComponents";

import {
  FooterContainer,
  InnerContent,
  Header5,
  Separator,
  SocialIcon,
  PaymentImg,
} from "./FooterStyleComponents";

import { ReactComponent as FacebookLogo } from "../../assets/FooterLogo/facebookIconsvg.svg";
import { ReactComponent as InstagramLogo } from "../../assets/FooterLogo/instagramIconsvg.svg";
import { ReactComponent as SnapchatLogo } from "../../assets/FooterLogo/snapchatIconsvg.svg";
import visa from "../../assets/FooterLogo/mastercard-png.webp";
import payPal from "../../assets/FooterLogo/pay-pal-png.webp";
import masterCard from "../../assets/FooterLogo/mastercard-png.webp";
import americanExpress from "../../assets/FooterLogo/american-express-png.webp";
import klarna from "../../assets/FooterLogo/klarna-gb-png.webp";
import applePay from "../../assets/FooterLogo/apple-pay-png.webp";
import afterPay from "../../assets/FooterLogo/afterpay_new-png.webp";
import discover from "../../assets/FooterLogo/discover-card-png.webp";
import dinerClub from "../../assets/FooterLogo/diners-club-png.webp";

function Footer() {
  return (
    <FooterContainer>
      <Container
        $backgroundColor="#ffffff"
        $color="#6c6f71"
        $borderTop="1px solid #eeeeee"
      >
        <Content $padding="10px 0px" $justifyContent="center" $gap="40px">
          <SocialIcon>
            <FacebookLogo width={35} height={35} />
          </SocialIcon>
          <SocialIcon>
            <InstagramLogo width={35} height={35} />
          </SocialIcon>
          <SocialIcon>
            <SnapchatLogo width={35} height={35} />
          </SocialIcon>
          <Separator>|</Separator>
          <PaymentImg src={visa} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={masterCard} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={payPal} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={americanExpress} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={klarna} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={applePay} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={afterPay} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={discover} alt="Paypal icon"></PaymentImg>
          <PaymentImg src={dinerClub} alt="Paypal icon"></PaymentImg>
        </Content>
      </Container>
      <Container $backgroundColor="#eeeeee" $color="black">
        <Content $padding="20px 0px" $justifyContent="Space-between" $gap='100px' $alignItems='flex-start'>
          <InnerContent>
            <Header5>HELP AND INFORMATION</Header5>
            <TextLink>Help</TextLink>
            <TextLink>Track Order</TextLink>
            <TextLink>Delivery & returns</TextLink>
            <TextLink>ASOS Premier</TextLink>
            <TextLink>10% Student Discount</TextLink>
            <TextLink>Sitemap</TextLink>
          </InnerContent>
          <InnerContent>
            <Header5>ABOUT ASOS</Header5>
            <TextLink>About us</TextLink>
            <TextLink>Careers at ASOS</TextLink>
            <TextLink>Corporate responsibility</TextLink>
            <TextLink>Investors' site</TextLink>
          </InnerContent>
          <InnerContent>
            <Header5>MORE FROM ASOS</Header5>
            <TextLink>Mobile and ASOS apps</TextLink>
            <TextLink>ASOS Marketplace</TextLink>
            <TextLink>E-gift cards</TextLink>
            <TextLink>Black Friday</TextLink>
            <TextLink>Refer A friend</TextLink>
            <TextLink>Help Improve the ASOS Website</TextLink>
          </InnerContent>
          <InnerContent>
            <Header5>SHOPPING FROM:</Header5>
            <p>You're in US | Change</p>
            <p>Some of your international sites: (add flags maybe later)</p>
          </InnerContent>
        </Content>
      </Container>
      <Container $backgroundColor="#dddddd" $color="#6c6f71">
        <Content $padding="20px 0px" $justifyContent="space-between" $gap='900px'>
          <p>© 2024 ASOS</p>
          <div>
            <TextLink>Privacy & Cookies</TextLink>
            <Separator>|</Separator>
            <TextLink>Ts&Cs</TextLink>
            <Separator>|</Separator>
            <TextLink>Accessibility</TextLink>
          </div>
        </Content>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
