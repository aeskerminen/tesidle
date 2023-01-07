import React, { useEffect, useMemo, useState } from "react";
import { CharacterInfoBox } from "./CharacterInfoBox";
import rawCharacterData from "./data/characters.json";

export const CharacterGuessWrapper = (props) => {
  let [characterData, setCharacterData] = useState([]);
  let [characterNames, setCharacterNames] = useState([]);

  let [currentCharacter, setcurrentCharacter] = useState({});
  let [targetCharacter, setTargetCharacter] = useState({});

  let [guessArray, setGuessArray] = useState([]);
  let [nameArray, setNameArray] = useState([]);

  let [input, setInput] = useState("");

  let [currentGuessCount, setCurrentGuessCount] = useState(0);
  let [currentWins, setCurrentWins] = useState(0);

  function getTargetCharacter() {
    const index = Math.floor(Math.random() * characterData.length);
    setTargetCharacter((targetCharacter = characterData[index]));

    console.log(characterNames[index]);
    console.log(targetCharacter);
  }

  function handleInputChange(event) {
    setInput((input = event.target.value));
  }

  useEffect(() => {
    const values = Object.values(rawCharacterData);
    const keys = Object.keys(rawCharacterData);

    setCharacterData((characterData = [...values]));
    setCharacterNames((characterNames = [...keys]));

    getTargetCharacter();
  }, []);

  useEffect(() => {
    if (JSON.stringify(currentCharacter) === JSON.stringify(targetCharacter)) {
      props.onSuccess(1);
      setCurrentWins((currentWins = currentWins + 1));

      setGuessArray([]);
      setNameArray([]);

      getTargetCharacter();
    }

    const totalW = (parseInt(localStorage["totalWins"]) || 0) + currentWins;

    localStorage.setItem("totalWins", totalW);

    console.log(currentGuessCount, currentWins);
  }, [currentCharacter]);

  const infoSpanStyle = {
    minWidth: "75px",
    maxWidth: "150px",
    textAlign: "center",
  };

  function CheckValidCharacterInput(char) {
    if (!nameArray.includes(char)) {
      if (characterNames.includes(char)) {
        const selection = rawCharacterData[char];

        setGuessArray((guessArray = [...guessArray, selection]));
        setNameArray((nameArray = [...nameArray, char]));

        console.log(guessArray);

        setcurrentCharacter(selection);

        console.log("YES");

        setCurrentGuessCount((currentGuessCount = currentGuessCount + 1));
        const totalG =
          (parseInt(localStorage["totalGuesses"]) || 0) + currentGuessCount;
        localStorage.setItem("totalGuesses", totalG);
      }
    }
  }

  return (
    <div className="w-full">
      <h1
        style={{ fontSize: "90px", textAlign: "center" }}
        className="p-2 mb-52"
      >
        SKYDLE
      </h1>

      <div className="mt-auto w-full p-2 flex flex-col drop-shadow-xl items-center">
        {/*Guess box*/}
        <div className="bg-gray-600 p-1 mb-2 flex justify-center">
          <input
            type="text"
            className="p-1 w-full"
            placeholder="Guess the character..."
            onChange={handleInputChange}
          ></input>
          <button
            type="button"
            className="bg-white border-2 p-1.5"
            onClick={() => {}}
          >
            Guess
          </button>
        </div>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "scroll",
          }}
          className="flex flex-col w-1/6 items-center"
        >
          {characterNames.map((name) => {
            if (name.includes(input)) {
              return (
                <button
                  onClick={() => {
                    CheckValidCharacterInput(name);
                  }}
                  className="p-2 bg-white m-1 rounded-md shadow-sm"
                >
                  {name}
                </button>
              );
            }
          })}
        </div>

        {/*Info box*/}
        <div className="flex flex-row p-2 text-lg w-1/2 bg-white rounded-lg shadow-md">
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
    </div>
  );
};
