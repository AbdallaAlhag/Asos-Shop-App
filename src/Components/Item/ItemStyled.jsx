import styled from "styled-components";
import { Column } from "../../style/CommonComponents";

export const ItemContainer = styled(Column)`
  text-align: left;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 320px; /* Adjust size as needed */
  height: auto;
`;

export const HoverImg = styled.img`
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;
