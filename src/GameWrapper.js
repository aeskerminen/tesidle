import React, { useEffect, useMemo, useState } from "react";

import background from "./img/sk_bg.jpg";

import Cards from "./data/cards.json";

import { CardWrapper } from "./CardWrapper";
import { CardHelper } from "./CardHelper";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Average guesses",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Guesses",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

export const GameWrapper = (props) => {
  let [cardData, setCardData] = useState([]);

  let [playedCards, setPlayedCards] = useState([]);
  let [playedCardNames, setPlayedCardNames] = useState([]);

  let [targetCard, setTargetCard] = useState();

  let [input, setInput] = useState("");

  let [showHelp, setShowHelp] = useState(false);

  let [dailyFinish, setDailyFinish] = useState(true);

  let [guessCounter, setGuessCounter] = useState(0);
  let [winCounter, setWinCounter] = useState(0);

  useEffect(() => {
    const values = Object.values(Cards);
    setCardData((cardData = [...values]));

    getTargetCard();

    console.log(targetCard);
  }, []);

  useEffect(() => {
    if (playedCards.length > 0) {
      if (playedCards[0]["Name"] === targetCard["Name"]) {
        console.log("WIN!!");
        setWinCounter((winCounter += 1));
        setDailyFinish(true);

        setPlayedCardNames([]);
        setPlayedCards([]);
      }
    }
  }, [playedCards]);

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
              return <CardHelper card={card}></CardHelper>;
            })}
          </div>
        </div>
      )}
      <div
        className={`w-full h-full ${showHelp ? "blur-sm" : "blur-none"}`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{ fontSize: "90px", textAlign: "center" }}
          className="p-2 mb-52"
        >
          TESDLE
        </h1>
        {dailyFinish && (
          <div className="p-2 bg-white mr-auto ml-auto w-fit">
            <div className="p-2 bg-slate-100 shadow mb-2">
              <Line data={data} options={options}></Line>
            </div>
            <div className="bg-slate-100 p-2 shadow">
              <span>
                You and {/*amount*/ 2} others have guessed the right card today
              </span>
            </div>
          </div>
        )}
        {!dailyFinish && (
          <div>
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
                    if (!playedCardNames.includes(input)) {
                      setPlayedCards(
                        (playedCards = [Cards[input], ...playedCards])
                      );

                      setPlayedCardNames(
                        (playedCardNames = [input, ...playedCardNames])
                      );

                      setGuessCounter((guessCounter += 1));
                    }
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
                  return (
                    <CardWrapper card={cur} target={targetCard}></CardWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
