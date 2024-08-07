import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/";
import { StyledP, StyledDiv, StyledButton } from "../../style/CommonComponents";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useState } from "react";
import { PaymentImg } from "../../Components/Footer/FooterStyleComponents";

import visa from "../../assets/FooterLogo/visa-png.webp";
import payPal from "../../assets/FooterLogo/pay-pal-png.webp";
import masterCard from "../../assets/FooterLogo/mastercard-png.webp";
import americanExpress from "../../assets/FooterLogo/american-express-png.webp";
import klarna from "../../assets/FooterLogo/klarna-gb-png.webp";
import applePay from "../../assets/FooterLogo/apple-pay-png.webp";
import afterPay from "../../assets/FooterLogo/afterpay_new-png.webp";
import discover from "../../assets/FooterLogo/discover-card-png.webp";
import dinerClub from "../../assets/FooterLogo/diners-club-png.webp";
import Tooltip from "../../Components/Tooltip";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const StyledDropdown = styled(Dropdown)`
  .Dropdown-control {
    background-color: #ffffff;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    width: 300px; /* Set your desired width */
    margin: 10px;
  }

  .Dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    margin: -10px 10px;

    width: 300px; /* Set your desired width */
  }

  .Dropdown-option {
    font-family: Arial, sans-serif;
    // font-size: 8px;
    margin: 0px;
    padding: 0px;
  }

  .Dropdown-option.is-selected {
    background-color: #e0e0e0;
  }

  .Dropdown-arrow {
    top: 14px; /* Adjust arrow position if needed */
  }
`;

const StyledContainer = styled(Container)`
  position: sticky;
  top: auto;
  margin: 10px 0px;
  z-index: 10;
`;
const Cart = () => {
  // const { cartItems, removeFromCart, clearCart } = useCart();
  const { cartItems, calculateTotal } = useCart();

  // const options = ["one", "two", "three"];
  // const defaultOption = options[0];
  const options = [
    {
      value: "Standard Click & Collect (Free)",
      label: "Standard Click & Collect (Free)",
    },
    {
      value: "Express Click & Collect ($10.00)",
      label: "Express Click & Collect ($10.00)",
    },
    {
      value: "Next-Day Click & Collect ($19.99)",
      label: "Next-Day Click & Collect ($19.99)",
    },
    { value: "Standard Shipping (Free)", label: "Standard Shipping (Free)" },
    { value: "Express Delivery ($10.00)", label: "Express Delivery ($10.00)" },
    {
      value: "Next-Day Delivery ($19.99)",
      label: "Next-Day Delivery ($19.99)",
    },
  ];
  const defaultOption = options[0];

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Container
        $backgroundColor="#eeeeee"
        $minHeight="100vh"
        // $height='100%'
        $alignItems="flex-start"
        $gap="10px"
        $overFlow="auto"
      >
        <Content
          $flexDirection="column"
          $justifyContent="center"
          // $gap="10px"
          $padding="10px 0px"
          $width="30%"
        >
          <StyledDiv
            $backGroundColor="#ffffff"
            $justifyContent="space-between"
            $width="100%"
            $padding="20px"
            $margin="0px"
          >
            <StyledP $fontWeight="bold">MY BAG</StyledP>
            <StyledP>Items are reserved for 60 minutes</StyledP>
          </StyledDiv>
          <StyledDiv $width="100%" $flexDirection="column">
            {cartItems.length === 0 || cartItems === undefined ? (
              <StyledP>Your cart is empty</StyledP>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    data={item}
                    quantity={item.quantity}
                  ></CartItem>
                ))}
              </>
            )}
          </StyledDiv>
          <StyledDiv
            $width="100%"
            $justifyContent="flex-end"
            $padding="20px"
            $margin="0px"
          >
            <StyledP $fontWeight="bold">Sub-total ${calculateTotal()}</StyledP>
          </StyledDiv>
        </Content>

        <StyledContainer
          $flexDirection="column"
          $padding="10px 0px"
          $justifyContent="flex-start"
          $alignItems="flex-start"
        >
          <StyledDiv $borderBottom="2px solid #eeeeee" $width="90%">
            <StyledP $fontWeight="bold" $textAlign="left">
              Total
            </StyledP>
          </StyledDiv>
          <StyledDiv
            $flexDirection="column"
            $alignItems="flex-start"
            $borderBottom="2px solid #eeeeee"
            $width="90%"
          >
            <StyledDiv
              $alignItems="flex-start"
              $justifyContent="space-between"
              $margin="0px"
              $width="90%"
            >
              <StyledP $fontWeight="bold" $textAlign="left">
                Sub-total
              </StyledP>
              <StyledP>${calculateTotal()}</StyledP>
            </StyledDiv>
            <StyledP $fontWeight="bold" $textAlign="left" $margin="0px 10px">
              Shipping
            </StyledP>
            <StyledP $fontWeight="bold" $textAlign="left" $margin="0px 10px">
              Sales Tax
            </StyledP>
            {/* drop down */}
            <StyledDropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
              placeholder="Select an option"
            />
          </StyledDiv>
          <StyledButton
            $margin="20px"
            $width="90%"
            $bgColor="#018849"
            $textColor="white"
            $border="solid #018849"
            $borderRadius="0px"
            $hoverBgColor="#006637"
            $hoverBorderColor="#006637"
            $fontWeight="bold"
            $fontSize="18px"
          >
            <Tooltip
              content="Payment not implemented"
              tooltipStyles={{
                $padding: "10px",
                $fontSize: "12px",
                $borderRadius: "4px",
                $width: "50%",
              }}
            >
              <span>Checkout</span>
            </Tooltip>
          </StyledButton>
          <StyledDiv $justifyContent="center" $alignItems="center">
            <StyledP $fontWeight="bold" $margin="10px">
              We Accept:
            </StyledP>
          </StyledDiv>
          <StyledDiv $gap="5px" $margin="0px 20px">
            <PaymentImg src={visa} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={masterCard} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={payPal} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={americanExpress} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={klarna} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={applePay} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={afterPay} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={discover} alt="Paypal icon"></PaymentImg>
            <PaymentImg src={dinerClub} alt="Paypal icon"></PaymentImg>
          </StyledDiv>
          <StyledP $margin="10px 20px">
            Got a discount code? Add it in the next step.
          </StyledP>
        </StyledContainer>
      </Container>
      <Footer></Footer>
    </Page>
  );
};

export default Cart;
