import React, { useState } from "react";
import styled from "styled-components";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attemptCount, setAttemptCount] = useState(0);
  const [guess, setGuess] = useState("");

  const handleTextInput = (e) => {
    let value = e.target.value.toUpperCase();
    if (value.length > 5) return;
    setGuess(value);
  };

  const submitGuess = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;

    console.log({ guess });
    resetState();
  };

  const resetState = () => {
    setGuess("");
  };

  return (
    <Wrapper>
      <GuessInput
        guess={guess}
        submitGuess={submitGuess}
        handleTextInput={handleTextInput}
      />
    </Wrapper>
  );
}

export default Game;

const Wrapper = styled.div`
  border: 1px solid red;
`;
