import styled from "styled-components";
import { Column } from "../../style/CommonComponents";

export const ItemContainer = styled(Column)`
  text-align: left;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  width: ${({ $width }) => $width || "320px"};

  height: ${({ $height }) => $height || ""};
`;
