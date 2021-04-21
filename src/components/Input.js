import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const Input = (props) => {
  const {
    inputLetter,
    setInputLetter,
    next,
    setCheckLetter,
    currentLetter,
  } = useContext(GameContext);
  const checkL = { ...currentLetter, isMatch: false };

  const pressHandler = (e) => {
    let letter = e.key;
    setInputLetter(letter.toUpperCase());
    setCheckLetter({
      ...checkL,
      isMatch: checkL.letter === letter.toUpperCase(),
    });
    next();
  };

  return (
    <>
      <input
        type="text"
        maxLength="1"
        readOnly
        onKeyPress={(e) => {
          pressHandler(e);
        }}
        value={inputLetter}
      />
    </>
  );
};

export default Input;
