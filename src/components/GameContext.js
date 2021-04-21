import { createContext, useState } from "react";
import { letterNumberMap } from "../util/arrayHelpers";

const clone = [...letterNumberMap];

const GameContext = createContext(null);

const GameProvider = ({ children }) => {
  const [counter, setCounter] = useState(26);
  const [delay, setDelay] = useState(5000);
  const [hit, setHit] = useState(0);
  const [miss, setMiss] = useState(0);

  const [currentLetter, setCurrentLetter] = useState("");
  const [inputLetter, setInputLetter] = useState("");
  const [isGameOn, setIsGameOn] = useState(false);
  const [checkLetter, setCheckLetter] = useState("");

  const nextRandomLetter = () => {
    if (clone.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * clone.length);
    setCurrentLetter(clone[randomIndex]);
    //remove current item from the clone array so there are no reapeating
    clone.splice(randomIndex, 1);
  };
  const next = () => {
    if (counter === 0) {
      setIsGameOn(false);
      return;
    }
    //set game counter
    setCounter((prev) => prev - 1);

    //set new letter
    nextRandomLetter();
  };

  return (
    <GameContext.Provider
      value={{
        inputLetter,
        setInputLetter,
        currentLetter,
        setCurrentLetter,
        counter,
        setCounter,
        hit,
        setHit,
        miss,
        setMiss,

        next,

        nextRandomLetter,
        delay,
        setDelay,
        setCheckLetter,
        checkLetter,
        isGameOn,
        setIsGameOn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
const GameConsumer = GameContext.Consumer;
export { GameProvider, GameConsumer, GameContext };
