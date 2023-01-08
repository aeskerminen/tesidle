import React, { useState } from "react";
import { GameWrapper } from "./GameWrapper";
import HomePage from "./HomePage";

let test = true;

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      {!test && <HomePage></HomePage>}
      {test && <GameWrapper></GameWrapper>}
    </div>
  );
};

export default App;
