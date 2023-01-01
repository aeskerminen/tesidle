import React, { useEffect, useState } from "react";
import dialogueData from "./data/dialogue.json";

const DialogueGuess = (props) => {
  let [dialogue, setDialogue] = useState([]);
  let [currentQst, setCurrentQst] = useState("");
  let [currentAns, setCurrentAns] = useState("");

  let [input, setInput] = useState("");

  function getQst() {
    const index = Math.floor(Math.random() * dialogue.length);
    const pick = dialogue[index];

    console.log(pick);

    setCurrentAns((currentAns = pick["ans"]));
    setCurrentQst((currentQst = pick["qst"]));
  }

  function validateQst() {
    if (input === currentAns) {
      props.onSuccess(1);

      getQst();
    }
  }

  function handleInputChange(event) {
    setInput((input = event.target.value));
  }

  useEffect(() => {
    const data = dialogueData;
    setDialogue((dialogue = [...data]));

    getQst();
  }, []);

  return (
    <div className="w-1/4 flex-col drop-shadow-xl">
      {/*Dialogue box*/}
      <div className="bg-gray-500 p-1 text-center text-xl text-white">
        {currentQst}
      </div>
      {/*Guess box*/}
      <div className="bg-gray-600 p-2 flex justify-center">
        <input
          type="text"
          className="p-1 w-full"
          placeholder="Guess the character..."
          onChange={handleInputChange}
        ></input>
        <button
          type="button"
          className="bg-white border-2 p-1.5"
          onClick={() => {
            validateQst();
          }}
        >
          Guess
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [score, setScore] = useState(0);

  const incrScore = (amount) => {
    setScore(Number(score + amount));
    console.log(`The score is: ${score + amount}`);
  };

  return (
    <div className="w-full h-full flex-col">
      <DialogueGuess onSuccess={incrScore}></DialogueGuess>
      <span className="text-xl shadow-md p-1">Score: {score}</span>
    </div>
  );
};

export default App;
