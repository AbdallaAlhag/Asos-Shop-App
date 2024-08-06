import GlobalStyle from "../../style/GlobalStyles";
import { Page, Container, Content } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/";
import { StyledP, StyledDiv } from "../../style/CommonComponents";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  // const { cartItems, removeFromCart, clearCart } = useCart();
  const { cartItems, calculateTotal } = useCart();

  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Container
        $backgroundColor="#eeeeee"
        $minHeight="50vh"
        $alignItems="flex-start"
      >
        <Content
          $flexDirection="column"
          $justifyContent="center"
          $gap="10px"
          $padding="10px 0px"
          $width="30%"
        >
          <StyledDiv
            $backGroundColor="#ffffff"
            $justifyContent="space-between"
            $width="100%"
            $padding="10px"
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
          <StyledDiv $width="100%" $justifyContent="flex-end" $padding='10px'>
            <StyledP $fontWeight='bold'>Sub-total ${calculateTotal()}</StyledP>
          </StyledDiv>
        </Content>
      </Container>
      <Footer></Footer>
    </Page>
  );
};

export default Cart;
