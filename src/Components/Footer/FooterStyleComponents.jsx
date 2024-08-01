import styled from "styled-components";
import { PageContainer } from "../../style/CommonComponents";

const FooterContainer = styled(PageContainer)`
  margin-top: auto;
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #6c6f71;
`;
const Header5 = styled.h4`
  color: #6e6e6e;
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
`;
export {
  FooterContainer,
  InnerContent,
  Header5,
  Separator,
  SocialIcon,
  PaymentImg,
};
