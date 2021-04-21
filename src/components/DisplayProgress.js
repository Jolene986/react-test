import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const Div = styled.div`
  border: 2px solid black;
  width: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid magenta;
`;

const DisplayProgress = () => {
  const { counter, hit, miss } = useContext(GameContext);

  return (
    <>
      <Div>counter:{counter}</Div>
      <Div>hit:{hit}</Div>
      <Div>miss:{miss}</Div>
    </>
  );
};

export default DisplayProgress;
