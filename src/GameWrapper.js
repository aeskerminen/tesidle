import React, { useEffect, useMemo, useState } from "react";

import Cards from "./data/cards.json";

import { CardWrapper } from "./CardWrapper";

export const GameWrapper = (props) => {
  let [cardData, setCardData] = useState([]);
  let [cardNames, setCardNames] = useState([]);

  let [input, setInput] = useState("");

  const infoSpanStyle = {
    minWidth: "75px",
    maxWidth: "150px",
    textAlign: "center",
  };

  useEffect(() => {
    setCardData([...Object.values(Cards)]);

    console.log(cardData);
  }, []);

  return (
    <div className="w-full">
      <h1
        style={{ fontSize: "90px", textAlign: "center" }}
        className="p-2 mb-52"
      >
        TESDLE
      </h1>

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
        </div>

        {/* Info box */}
        <div className="flex flex-row p-2 text-lg w-1/2 bg-white rounded-lg shadow-md">
          <span style={infoSpanStyle} className="w-1/6">
            Set
          </span>
          <span style={infoSpanStyle} className="w-1/6">
            Type
          </span>
          <span style={infoSpanStyle} className="w-1/6">
            Subtype
          </span>
          <span style={infoSpanStyle} className="w-1/6">
            Attributes
          </span>
          <span style={infoSpanStyle} className="w-1/6">
            Class
          </span>
          <span style={infoSpanStyle} className="w-1/6">
            Rarity
          </span>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2">
          <CardWrapper card={Cards["Abnur Tharn"]}></CardWrapper>
        </div>
      </div>
    </div>
  );
};
