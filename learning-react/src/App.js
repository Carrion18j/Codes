import React from "react";
import { useState } from "react";
import { NewExpence, Expences } from "./components";
import "./data";

const App = () => {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const expenceData = (e) => {
    console.log(e);
  };
  return (
    <section className="sm:grid grid-flow-row grid-cols-3 flex flex-col bg-slate-700">
      <div className="ml-[10px]">
        <NewExpence enteredData={expenceData} enteredYear={setYear} />
      </div>
      <div className="col-span-2">
        <Expences year={year} />
      </div>
    </section>
  );
};

export default App;
