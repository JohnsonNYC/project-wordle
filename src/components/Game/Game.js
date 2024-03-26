import React, { useState } from "react";
import styled from "styled-components";
// Utils
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Components
import GuessInput from "./GuessInput";
import Board from "./Board";
import CompleteBanner from "./CompleteBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attemptCount, setAttemptCount] = useState(NUM_OF_GUESSES_ALLOWED);
  const [isComplete, setIsComplete] = useState(""); // 'won', 'lose', ''
  const [guessHistory, setGuessHistory] = useState([]);
  const [guess, setGuess] = useState("");

  const handleTextInput = (e) => {
    let value = e.target.value.toUpperCase();
    if (value.length > 5) return;
    setGuess(value);
  };

  const submitGuess = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    let keyId = crypto.randomUUID();
    let guessHistoryCopy = [...guessHistory];

    guessHistoryCopy.push({ id: keyId, text: guess });
    setGuessHistory(guessHistoryCopy);

    checkCompletion();
    resetState();
  };

  const checkCompletion = () => {
    if (guess === answer) {
      setIsComplete("won");
    } else {
      const newAttemptCount = attemptCount - 1;
      setAttemptCount(newAttemptCount);
      if (newAttemptCount == 0) setIsComplete("lose");
    }
  };

  const resetState = () => {
    setGuess("");
  };

  return (
    <Wrapper>
      <Board answer={answer} guessHistory={guessHistory} />
      <GuessInput
        guess={guess}
        submitGuess={submitGuess}
        handleTextInput={handleTextInput}
        isComplete={isComplete}
      />
      <CompleteBanner isComplete={isComplete} answer={answer} />
    </Wrapper>
  );
}

export default Game;

const Wrapper = styled.div``;
