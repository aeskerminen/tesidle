import React, { useEffect, useMemo, useState } from "react";
import dialogueData from "./data/characters.json";

const CharacterInfoBox = (props) => {
  return (
    <div className="flex flex-row p-2 align-middle">
      <span
        style={
          props.curChar["Race"] === props.tgtChar["Race"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Race"]}
      </span>
      <span
        style={
          props.curChar["Gender"] === props.tgtChar["Gender"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Gender"]}
      </span>
      <span
        style={
          props.curChar["Class"] === props.tgtChar["Class"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Class"]}
      </span>
      <span
        style={
          props.curChar["Location"] === props.tgtChar["Location"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Location"]}
      </span>
      <span
        style={
          props.curChar["Rank"] === props.tgtChar["Rank"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Rank"]}
      </span>
      <span
        style={
          props.curChar["Faction"] === props.tgtChar["Faction"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Faction"]}
      </span>
      <span
        style={
          props.curChar["Services"] === props.tgtChar["Services"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Services"]}
      </span>
    </div>
  );
};

const CharacterGuessWrapper = (props) => {
  let [dialogue, setDialogue] = useState([]);
  let [names, setNames] = useState([]);

  let [currentCharacter, setcurrentCharacter] = useState({});
  let [targetCharacter, setTargetCharacter] = useState({});

  let [guessArray, setGuessArray] = useState([]);
  let [nameArray, setNameArray] = useState([]);

  let [input, setInput] = useState("");

  function getTargetCharacter() {
    const index = Math.floor(Math.random() * dialogue.length);
    setTargetCharacter((targetCharacter = dialogue[index]));

    console.log(names[index]);
    console.log(targetCharacter);
  }

  function handleInputChange(event) {
    setInput((input = event.target.value));
  }

  useEffect(() => {
    const data = Object.values(dialogueData);

    const keys = Object.keys(dialogueData);

    setDialogue((dialogue = [...data]));
    setNames((names = [...keys]));

    getTargetCharacter();
  }, []);

  useEffect(() => {
    if (JSON.stringify(currentCharacter) === JSON.stringify(targetCharacter)) {
      props.onSuccess(1);
    }
  }, [currentCharacter]);

  return (
    <div className="w-full p-2 flex flex-col drop-shadow-xl items-center">
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
            if (!nameArray.includes(input)) {
              if (names.includes(input)) {
                setGuessArray(
                  (guessArray = [...guessArray, dialogueData[input]])
                );
                setNameArray((nameArray = [...nameArray, input]));
                setcurrentCharacter(dialogueData[input]);
              }
            }
          }}
        >
          Guess
        </button>
      </div>
      <div
        style={{ maxHeight: "200px", overflow: "scroll" }}
        className="flex flex-col w-1/6 items-center"
      >
        {names.map((name) => {
          if (name.includes(input)) {
            return <span>{name}</span>;
          }
        })}
      </div>

      {/*Info box*/}
      <div className="flex flex-row p-2 text-lg w-1/2">
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Race
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Gender
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Class
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Location
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Rank
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Faction
        </span>
        <span
          style={{ minWidth: "75px", maxWidth: "150px", textAlign: "center" }}
          className="w-1/6"
        >
          Services
        </span>
      </div>

      <div className="flex flex-col gap-y-2 w-1/2">
        {guessArray.map((char) => (
          <CharacterInfoBox
            key={char["Name"]}
            curChar={char}
            tgtChar={targetCharacter}
          ></CharacterInfoBox>
        ))}
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
    <div className="flex flex-col justify-center items-center h-full">
      <CharacterGuessWrapper onSuccess={incrScore}></CharacterGuessWrapper>
      <span className="text-xl shadow-md p-1">Score: {score}</span>
    </div>
  );
};

export default App;
