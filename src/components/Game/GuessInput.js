import React from "react";

const GuessInput = ({ guess, submitGuess, handleTextInput }) => {
  return (
    <form class="guess-input-wrapper" onSubmit={submitGuess}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleTextInput}
      />
    </form>
  );
};

export default GuessInput;
