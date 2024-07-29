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
  text-align: center;
  line-height: 1.5;
  line-space: 1.5;
`;

const AppButton = styled.button`
  cursor: pointer;
  padding: 5px 30px;
  color: black;
  border-radius: 30px;
  background-color: transparent;
  font-size: 2em;
  border: 2px solid black;
  font-weight: bold;
`;

const DownloadButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  background: #000000;
  border-radius: 30px;
  font-size: 2em;
  padding: 5px 30px;
  border: 2px solid black;
  font-weight: bold;
`;

export {
  BottomInfoContainer,
  ContentColumn,
  Pitch,
  LinkHeader,
  AppButton,
  DownloadButton,
};
