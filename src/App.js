import React, { useEffect, useState } from "react";
import dialogueData from "./data/dialogue.json";

const DialogueGuess = (props) => {
  let [dialogue, setDialogue] = useState([]);
  let [currentQst, setCurrentQst] = useState("");
  let [currentAns, setCurrentAns] = useState("");

  function getQst() {
    const pick = dialogue[Math.floor(Math.random() * dialogue.length)];

    console.log(pick);

    setCurrentAns((currentAns = pick["ans"]));
    setCurrentQst((currentQst = pick["qst"]));

    console.log(currentAns, currentQst);
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        nulla accumsan, viverra enim quis, efficitur tellus. Pellentesque
        sodales egestas nunc vel accumsan. Aenean sollicitudin, erat quis
        consequat venenatis, turpis erat consequat lacus, vitae dapibus mi odio
        vel nunc. Praesent pulvinar eu turpis ut ornare. Nam non feugiat tortor.
        Aliquam facilisis iaculis odio, at efficitur ex pellentesque ut. Donec a
        purus scelerisque, convallis ex at, porta nisl. Mauris dapibus a nibh
        sed viverra. Nulla porta imperdiet dolor ut volutpat. Proin consectetur
        fringilla dapibus. Proin ut enim nec est fringilla bibendum. Quisque
        tortor lorem, aliquet vulputate ornare vitae, scelerisque ut nulla. Nunc
        sodales sodales vestibulum. Sed et enim vel nisl ultricies posuere.
        Nulla lacus libero, aliquet ultricies ex in, blandit fringilla elit.
      </div>
      {/*Guess box*/}
      <div className="bg-gray-600 p-2 flex justify-center">
        <input
          className="p-1 w-full"
          placeholder="Guess the character..."
        ></input>
        <button
          type="button"
          className="bg-white shadow-lg border-4 p-1.5 mr-auto"
          onClick={() => {
            props.onSuccess(2);
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
    console.log(`The score is: ${score}`);
  };

  return (
    <div className="w-full flex justify-center">
      <DialogueGuess onSuccess={incrScore}></DialogueGuess>
    </div>
  );
};

export default App;
