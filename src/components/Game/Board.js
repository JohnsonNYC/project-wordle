import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Board = ({ answer, guessHistory }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((n) => {
        const guessText = (guessHistory[n] && guessHistory[n].text) || "";
        const check = checkGuess(guessText, answer);
        return (
          <GuessRow
            key={n}
            guessText={guessText}
            answer={answer}
            check={check}
          />
        );
      })}
    </div>
  );
};

const GuessRow = ({ check, guessText = "" }) => {
  return (
    <p className="guess">
      {range(0, 5).map((n) => {
        const guessTextLetter = guessText[n];
        const classAppend = (check && check[n] && check[n].status) || "";
        return (
          <span key={n} className={`cell ${classAppend}`}>
            {guessTextLetter}
          </span>
        );
      })}
    </p>
  );
};

export default Board;
