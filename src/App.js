import React, { useState } from "react";
import { AppContextProvider } from "./AppContext";
import { GameWrapper } from "./GameWrapper";
import HomePage from "./HomePage";

let test = true;

const App = () => {
  return (
    <AppContextProvider>
      <div style={{ height: "100vh" }}>
        {!test && <HomePage></HomePage>}
        {test && <GameWrapper></GameWrapper>}
      </div>
    </AppContextProvider>
  );
};

export default App;
