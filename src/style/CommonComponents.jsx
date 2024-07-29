// src/CommonComponents.js
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#ffffff"};
  border-top: ${({ $borderTop }) => $borderTop || "none"};
  background: ${({ $background }) => ($background ? $background : "")};
  height: ${({ $height }) => ($height ? $height : "")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: center;
  width: 70%;
  gap: ${({ $gap }) => $gap || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TextLink = styled.a`
  color: #6c6f71;
  cursor: pointer;
  &:hover {
    color: var(--link-hover);
  }
`;
// Add any additional common components here
 export const Column = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center
 `;
