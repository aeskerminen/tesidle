import React, { useState } from "react";
import { CharacterGuessWrapper } from "./CharacterGuessWrapper";

const App = () => {
  const [score, setScore] = useState(0);

  const incrScore = (amount) => {
    setScore(Number(score + amount));
    console.log(`The score is: ${score + amount}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <CharacterGuessWrapper onSuccess={incrScore}></CharacterGuessWrapper>
      <span className="text-xl shadow-md p-1">Score: {score}</span>
    </div>
  );
};

export default App;
