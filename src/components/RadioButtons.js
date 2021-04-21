import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./GameContext";

const Radio = () => {
  const { isGameOn, setDelay, delay } = useContext(GameContext);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setDelay(value);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          id="easy"
          value="5000"
          checked={delay === 5000}
          onChange={(event) => handleSelectChange(event)}
          disabled={isGameOn}
        />
        <RadioButtonLabel htmlFor="easy" />
        <div>Easy</div>
      </Item>
      <Item>
        <RadioButton
          id="medium"
          type="radio"
          name="radio"
          value="3500"
          checked={delay === 3500}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel htmlFor="medium" />
        <div>Medium</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="2000"
          checked={delay === 2000}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Hard</div>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` &:checked + ${RadioButtonLabel} {
      background: #db7290;
      border: 1px solid #db7290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

export default Radio;
