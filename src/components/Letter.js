import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const Div = styled.div`
  border: 2px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LetterHolder = styled.div`
  text-align: center;
  font-size: 1em;
  color: ${(props) => props.color};
`;

const Letter = ({ number, letter }) => {
  const [color, setColor] = useState("#262626");
  const { checkLetter, setHit } = useContext(GameContext);
  useEffect(() => {
    setColor("#262626");
  }, []);
  useEffect(() => {
    if (checkLetter.letter === letter) {
      checkLetter.isMatch ? setColor("green") : setColor("red");
      setHit((prev) => prev + 1);
    }
  }, [checkLetter, letter, setHit]);
  return (
    <Div>
      <LetterHolder color={color}>{`${letter} : (${number})`}</LetterHolder>
    </Div>
  );
};

export default Letter;
