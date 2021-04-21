import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const StyledButton = styled.div`
  border: 2px solid black;
  width: 15%;
  padding: 10px 20px;
  background-color: rgba(38, 38, 38, 0.85);
  color: #fff;
  font-size: 1.3em;
  margin: 10px auto;
  cursor: pointer;
`;
const Button = ({ children }) => {
  const {
    nextRandomLetter,
    setIsGameOn,
    isGameOn,
    setInputLetter,
    setCounter,
    setHit,
    setMiss,
    setCheckLetter,
    setCurrentLetter,
  } = useContext(GameContext);
  const clickHandler = () => {
    if (isGameOn === false) {
      setIsGameOn(true);
      nextRandomLetter();
    } else {
      //reset

      setIsGameOn(false);
      setInputLetter("");
      setCounter(26);
      setHit(0);
      setMiss(0);
      setCheckLetter("");
      setCurrentLetter("");
      setInputLetter("");
    }
  };

  return (
    <StyledButton onClick={clickHandler}>
      {isGameOn ? "RESET" : "START"}
    </StyledButton>
  );
};

export default Button;
