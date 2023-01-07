import React, { useState } from "react";
import { CharacterGuessWrapper } from "./CharacterGuessWrapper";
import HomePage from "./HomePage";
import background from "./img/sk_bg.jpg";

let test = true;

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
      {!test && <HomePage></HomePage>}
      {test && <CharacterGuessWrapper></CharacterGuessWrapper>}
    </div>
  );
};

export default App;
