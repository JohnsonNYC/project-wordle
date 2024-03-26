/* eslint-disable eqeqeq */
import React from "react";

const CompleteBanner = ({ isComplete, answer }) => {
  return isComplete ? (
    isComplete == "won" ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    ) : (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  ) : null;
};

export default CompleteBanner;
