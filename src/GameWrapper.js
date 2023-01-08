import React, { useEffect, useMemo, useState } from "react";

import background from "./img/sk_bg.jpg";

import Cards from "./data/cards.json";

import { CardWrapper } from "./CardWrapper";

export const GameWrapper = (props) => {
  let [cardData, setCardData] = useState([]);
  let [cardNames, setCardNames] = useState([]);

  let [playedCards, setPlayedCards] = useState([]);

  let [targetCard, setTargetCard] = useState();

  let [input, setInput] = useState("");

  let [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const values = Object.values(Cards);
    setCardData((cardData = [...values]));

    getTargetCard();

    console.log(targetCard);
  }, []);

  function getTargetCard() {
    const index = Math.floor(Math.random() * cardData.length);
    setTargetCard((targetCard = cardData[index]));
  }

  return (
    <div className="h-full">
      {/* Card help */}
      {showHelp && (
        <div
          className="bg-white rounded-lg shadow-md p-2 absolute overflow-y-scroll"
          style={{
            height: "75%",
            width: "75%",
            zIndex: 999,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
          }}
        >
          <div className="grid grid-cols-4">
            {cardData.map((card) => {
              return (
                <div className="m-1 p-1 flex flex-col items-center bg-gray-400 shadow border-2 border-black rounded-sm">
                  <span className="text-2xl p-1">{card["Name"]}</span>
                  <img
                    className="p-1 m-1 shadow-md bg-white"
                    src={`${process.env.PUBLIC_URL}/cards/${card["Name"]}.jpg`}
                  ></img>
                  <div className="p-1 m-1 mb-2 bg-white flex flex-col gap-y-1 w-full">
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Set:</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Set"]}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Type:</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Type"]}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Subtype:</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Subtype"]}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Attribute(s):</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Attribute(s)"]}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Rarity:</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Rarity"]}
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <span className="p-2 bg-slate-200">Effects:</span>
                      <span className="p-2 bg-slate-200 grow text-center">
                        {card["Effects"]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div
        className={`w-full h-full ${showHelp ? "blur-sm" : "blur-none"}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1
          style={{ fontSize: "90px", textAlign: "center" }}
          className="p-2 mb-52"
        >
          TESDLE
        </h1>

        <button
          type="button"
          className="bg-white shadow-md rounded p-2 text-center text-xl absolute z-50 mt-16 -ml-2"
          onClick={() => {
            setShowHelp(!showHelp);
          }}
        >
          {">"}
        </button>

        <div className="mt-auto w-full p-2 flex flex-col drop-shadow-xl items-center">
          {/* Card input */}
          <div className="mb-2">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Name a Card..."
              className="p-2 shadow-md focus:outline-none"
            ></input>
            <button
              onClick={() => {
                setPlayedCards((playedCards = [Cards[input], ...playedCards]));
              }}
              type="button"
              className="p-2 shadow-md bg-white ml-1"
            >
              Lay
            </button>
          </div>

          {/* Info box */}
          <div className="grid grid-cols-6 p-2 bg-white rounded-lg shadow-md w-2/3 justify-items-center">
            <span>Set</span>
            <span>Type</span>
            <span>Subtype</span>
            <span>Attributes</span>
            <span>Class</span>
            <span>Rarity</span>
          </div>
          <div className="flex flex-col gap-y-2 w-2/3">
            {playedCards.map((cur) => {
              return <CardWrapper card={cur} target={targetCard}></CardWrapper>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
