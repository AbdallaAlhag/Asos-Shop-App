import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f9f9f9"};
`;

const Content = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  width: 75%;
  gap: ${({ $gap }) => $gap || "0px"};
`;

const InnerDiv = styled.div`
  border-left: 2px solid #ddd;
  padding-left: 10px;
  padding-right: 10px;
`;

const MidButton = styled.button`
  color: #fff;
  background-color: #2d2d2d;
  border-style: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 5px 15px; /* Adjust padding as needed */
  &:hover {
    background-color: #525050;
  }
`;

const LowButton = styled(MidButton)`
  background-color: transparent;
  box-sizing: border-box;
  white-space: nowrap; 

  padding: 0px 10px; 
  &:hover {
    background-color: white;
    color: black;
  }
`;

const LinkText = styled.p`
  // FiX this
  letter-spacing: 2px;
  line-height: 62px;
  font-weight: 900;
  font-size: .875rem;

`;
const TabText = styled(LinkText)`
  font-weight: 400;
  line-height: 50px;
  font-size: 100%;
`;

export {
  HeaderContainer,
  Container,
  Content,
  InnerDiv,
  MidButton,
  LowButton,
  LinkText,
  TabText,
};
