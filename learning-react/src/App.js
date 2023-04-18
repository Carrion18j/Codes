import React from "react";
import { NewExpence, Expences , MainMeter } from "./components";
import "./data";

const App = () => {
  const expenceData = (e) => {
    console.log(e)
  }

  return (
    <section className="flex flex-col justify-center items-center bg-slate-700">
      <MainMeter/>
      <NewExpence enteredData={expenceData}/>
      <Expences />
    </section>
  );
};

export default App;