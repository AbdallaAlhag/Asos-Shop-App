import styled from "styled-components";
import { PageContainer } from "../../style/CommonComponents";

const FooterContainer = styled(PageContainer)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f9f9f9"};
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Header5 = styled.h4`
  color: #6e6e6e;
`;
const TextLink = styled.a`
  color: #6c6f71;
  cursor: pointer;
  &:hover {
    color: var(--link-hover);
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: #000;
`;

const SocialIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 50%;
  border-color: transparent;
  
  &:hover {
    border-color: var(--button-hover);
  }
`;

const PaymentImg = styled.img`
  width: 30px;
  height: auto;
`
export {
  FooterContainer,
  Container,
  TextLink,
  InnerContent,
  Header5,
  Separator,
  SocialIcon,
  PaymentImg,
};
