import React, { useState } from "react";
import nazik from "./image0.jpeg";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={nazik} className="Pizda-logo" alt="nazik" />
        <p>
          hello i am the developer from ternopil. my salary is 1400$ please
          message me. i will made the same landing form your business. if you
          have a question about my skills. please look at this:
        </p>
        <button onClick={() => setCounter((prev) => prev + 1)}>increase</button>
        <div style={{ width: "50px" }}>{counter}</div>
      </header>
    </div>
  );
};

export default App;
