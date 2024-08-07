// src/CommonComponents.js
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  gap: ${({ $gap }) => $gap || ""};
`;

export const Container = styled.div`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#ffffff"};
  border-top: ${({ $borderTop }) => $borderTop || "none"};
  border-bottom: ${({ $borderBottom }) => $borderBottom || "none"};
  background: ${({ $background }) => ($background ? $background : "")};
  height: ${({ $height }) => ($height ? $height : "")};
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "")};
  padding: ${({ $padding }) => $padding || "0px"};
  gap: ${({ $gap }) => $gap || ""};
  flex-grow: ${({ $flexGrow }) => $flexGrow || ""};
  over-flow: ${({ $overFlow }) => $overFlow || ""};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  width: ${({ $width }) => $width || ""};
  gap: ${({ $gap }) => $gap || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};
  flex-wrap: ${({ $wrap }) => $wrap || ""};
  height: ${({ $height }) => $height || ""};
  max-width: ${({ $maxWidth }) => $maxWidth || ""};
  border-bottom: ${({ $borderBottom }) => $borderBottom || "none"};
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
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  width: ${({ $width }) => $width || ""};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  width: ${({ $width }) => $width || "100%"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#ffffff"};
`;

export const StyledP = styled.p`
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  margin: ${({ $margin }) => $margin || "10px"};
  width: ${({ $width }) => $width || ""};
  padding: ${({ $padding }) => $padding || "0px"};
`;

export const StyledButton = styled.button`
  padding: ${({ $padding }) => $padding || "10px 20px"};
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  color: ${({ $textColor }) => $textColor || "black"};
  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  border: ${({ $border }) => $border || "2px solid black"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "4px"};
  cursor: pointer;
  margin: ${({ $margin }) => $margin || "10px"};
  width: ${({ $width }) => $width || ""};
  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || "black"};
    color: ${({ $hoverTextColor }) => $hoverTextColor || "white"};
    border-color: ${({ $hoverBorderColor }) => $hoverBorderColor || ""};
  }
`;

export const StyledImg = styled.img`
  height: ${({ $height }) => ($height ? $height : "")};
  width: ${({ $width }) => ($width ? $width : "")};
  user-select: ${({ $userSelect }) => ($userSelect ? $userSelect : "")};
  transition: opacity 0.3s ease-in-out;
  object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : "")};
`;

export const StyledDiv = styled.div`
  background-color: ${({ $backGroundColor }) => $backGroundColor || "#ffffff"};
  width: ${({ $width }) => $width || ""};
  margin: ${({ $margin }) => $margin || "10px"};
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  width: ${({ $width }) => $width || ""};
  gap: ${({ $gap }) => $gap || "0px"};
  padding: ${({ $padding }) => $padding || "0px"};
  flex-wrap: ${({ $wrap }) => $wrap || ""};
  height: ${({ $height }) => $height || ""};
  max-width: ${({ $maxWidth }) => $maxWidth || ""};
  border-bottom: ${({ $borderBottom }) => $borderBottom || "none"};
  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || ""};
    color: ${({ $hoverTextColor }) => $hoverTextColor || ""};
    border-color: ${({ $hoverBorderColor }) => $hoverBorderColor || ""};
  }
`;
