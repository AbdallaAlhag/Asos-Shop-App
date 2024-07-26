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
    height: 100%;
    // FiX this 
    width: 5%;
    letter-spacing: 2px;
    font-weight: 900px;
    line-height: 62px
    
    &:hover {
    background-color: #45a049; 
  }
`;

const LowButton = styled(MidButton)`
  width: 100%;
`;

const LinkText = styled.p`
`;

const TabText = styled(LinkText)`
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
