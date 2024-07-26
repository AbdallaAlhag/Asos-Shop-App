import styled from "styled-components";

const BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkHeader = styled.h2`
  padding-top: 50px;
`;

const Pitch = styled.p`
  color: #6c6f71;
  width: 50%;
  text-align:center;
  line-height: 1.5;
  line-space: 1.5;
`;
export { BottomInfoContainer, ContentColumn, Pitch, LinkHeader };
