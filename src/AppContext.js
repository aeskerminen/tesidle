import { createContext, useContext, useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";

import Cards from "./data/cards.json";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const supabaseUrl = "https://amwwfnmzgjbzsqpmegsh.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtd3dmbm16Z2pienNxcG1lZ3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwNzQ3ODEsImV4cCI6MTk4OTY1MDc4MX0.HmamDGO0nIMPgi4QmR7Oa9Zp-TOyWk1Vb5M_KhHwiyg";
  const supabase = createClient(supabaseUrl, supabaseKey);

  let [cardOfToday, setCardOfToday] = useState("");
  let [todaysWins, setTodayWins] = useState(0);

  let [winCounter, setWinCounter] = useState(0);
  let [guessCounter, setGuessCounter] = useState(0);

  const [curDate, setCurDate] = useState(new Date().toISOString());

  const [isLoading, setIsLoading] = useState(true);

  const getCardOfToday = async () => {
    const { data, error } = await supabase.from("cot").select();
    setCardOfToday((cardOfToday = Cards[data[0]["name"]]));

    console.log(cardOfToday);
  };

  const addWin = () => {
    setWinCounter((winCounter = winCounter + 1));
    localStorage.setItem("winCounter", winCounter);
  };

  const addGuess = () => {
    setWinCounter((guessCounter = guessCounter + 1));
    localStorage.setItem("guessCounter", guessCounter);
  };

  useEffect(() => {
    setCurDate(new Date().toISOString());
    getCardOfToday();

    setWinCounter(
      (winCounter = Number.parseInt(localStorage.getItem("winCounter")) || 0)
    );

    setGuessCounter(
      (guessCounter =
        Number.parseInt(localStorage.getItem("guessCounter")) || 0)
    );

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const getTodayWins = async () => {
      const { data, error } = await supabase
        .from("dailywins")
        .select()
        .eq("id", curDate);

      if (data[0] !== undefined) {
        setTodayWins((todaysWins = data[0]["wins"]));
      } else {
        const { data, error } = await supabase
          .from("dailywins")
          .insert({ id: curDate, wins: 0 });
      }
    };

    const updateWins = async () => {
      const { data, error } = await supabase.rpc("increment", {
        x: 1,
        row_id: curDate,
      });
    };

    console.log(curDate);

    if (!isLoading) {
      updateWins();
      getTodayWins();
    }
  }, [winCounter]);

  return (
    <AppContext.Provider
      value={{ isLoading, Cards, cardOfToday, todaysWins, addWin, addGuess }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
