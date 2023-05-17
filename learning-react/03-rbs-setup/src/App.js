import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./demo/DemoOutput";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  const togglePara = () => {
    setShowPara((e) => !e);
  };

  return (
    <div>
      <div className="app">
        <h1>Hi there!</h1>
        <Button onClick={togglePara}>Toggle Para</Button>
        <DemoOutput show={showPara} />
      </div>
    </div>
  );
}

export default App;
