import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";
import { useInterval } from "../hooks/useInterval";

const Div = styled.div`
  border: 1px solid darkcyan;
  font-size: 2.5em;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrojTest = () => {
  const { currentLetter, next, delay, isGameOn, setMiss } = useContext(
    GameContext
  );
  useInterval(
    () => {
      setMiss((prev) => prev + 1);
      next();
    },
    delay,
    isGameOn
  );

  return (
    <>
      <Div>{currentLetter.number}</Div>
    </>
  );
};

export default BrojTest;
