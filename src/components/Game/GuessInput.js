import React from "react";

const GuessInput = ({ guess, submitGuess, handleTextInput, isComplete }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleTextInput}
        disabled={isComplete.length}
      />
    </form>
  );
};

export default GuessInput;
