// src/CommonComponents.js
import styled from 'styled-components';


export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f9f9f9"};
`;

export const Content = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: center;
  width: 70%;
  gap: ${({ $gap }) => $gap || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};
`;

export const Page = styled.div`
`;
// Add any additional common components here
