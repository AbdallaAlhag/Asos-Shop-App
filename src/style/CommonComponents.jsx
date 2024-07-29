// src/CommonComponents.js
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems || "center"};
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
  width: ${({ $width }) => $width || ""};
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
  justify-content: center;
`;


export const StyledP = styled.p`
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  margin: ${({ $margin }) => $margin || '10px'};
`;

export const StyledButton = styled.button`
  padding: ${({ $padding }) => $padding || '10px 20px'};
  font-size: ${({ $fontSize }) => $fontSize || '14px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  color: ${({ $textColor }) => $textColor || 'black'};
  background-color: ${({ $bgColor }) => $bgColor || '#007bff'};
  border: ${({ $border }) => $border || '2px solid black'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '4px'};
  cursor: pointer;
  margin: ${({ $margin }) => $margin || '10px'};

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || '#0056b3'};
    color: ${({ $hoverTextColor }) => $hoverTextColor || 'white'};
  }
`;

export const StyledImg = styled.img`
  height: ${({ $height }) => ($height ? $height : "")};
  width: ${({ $height }) => ($height ? $height : "")};
  user-select: ${({ $userSelect }) => ($userSelect ? $userSelect : "")};

`;