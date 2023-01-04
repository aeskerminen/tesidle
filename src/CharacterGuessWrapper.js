import React, { useEffect, useState } from "react";
import { CharacterInfoBox } from "./CharacterInfoBox";
import dialogueData from "./data/characters.json";

export const CharacterGuessWrapper = (props) => {
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

  const infoSpanStyle = {
    minWidth: "75px",
    maxWidth: "150px",
    textAlign: "center",
  };

  function CheckValidCharacterInput() {
    if (!nameArray.includes(input)) {
      if (names.includes(input)) {
        setGuessArray((guessArray = [...guessArray, dialogueData[input]]));
        setNameArray((nameArray = [...nameArray, input]));
        setcurrentCharacter(dialogueData[input]);
      }
    }
  }

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
          onClick={CheckValidCharacterInput}
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
        <span style={infoSpanStyle} className="w-1/6">
          Race
        </span>
        <span style={infoSpanStyle} className="w-1/6">
          Gender
        </span>
        <span style={infoSpanStyle} className="w-1/6">
          Class
        </span>
        <span style={infoSpanStyle} className="w-1/6">
          Location
        </span>
        <span style={infoSpanStyle} className="w-1/6">
          Rank
        </span>
        <span style={infoSpanStyle} className="w-1/6">
          Faction
        </span>
        <span style={infoSpanStyle} className="w-1/6">
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
