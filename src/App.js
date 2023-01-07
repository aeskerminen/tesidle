import React, { useState } from "react";
import { GameWrapper } from "./GameWrapper";
import HomePage from "./HomePage";
import background from "./img/sk_bg.jpg";

let test = true;

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
      {!test && <HomePage></HomePage>}
      {test && <GameWrapper></GameWrapper>}
    </div>
  );
};

export default App;
