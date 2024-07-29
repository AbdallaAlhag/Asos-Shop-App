import styled from "styled-components";

const TitleContainer = styled.div`
  font-size: 4rem;
  color: black;
  display: flex;
  align-items: center;
    font-weight: bold;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  padding: 20px 30px;
`;

export { TitleContainer };
