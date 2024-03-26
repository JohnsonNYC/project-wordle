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
        return <GuessRow key={n} check={check} />;
      })}
    </div>
  );
};

const GuessRow = ({ check }) => {
  return (
    <p className="guess">
      {range(0, 5).map((n) => {
        const guessTextLetter = (check && check[n] && check[n].letter) || "";
        const status = (check && check[n] && check[n].status) || "";
        return <Cell key={n} letter={guessTextLetter} status={status} />;
      })}
    </p>
  );
};

const Cell = ({ letter, status }) => {
  const customClass = `cell ${status || null}`;
  return <span className={customClass}>{letter}</span>;
};
export default Board;
