import React from "react";
import styled from "styled-components";

import { letterNumberMap } from "../util/arrayHelpers";
import Letter from "./Letter";

const LetterContainer = styled.div`
  width: 85%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
`;

const DisplayPairs = () => {
  return (
    <LetterContainer>
      {letterNumberMap.map(({ number, letter }) => (
        <Letter key={number} number={number} letter={letter} />
      ))}
    </LetterContainer>
  );
};

export default DisplayPairs;
