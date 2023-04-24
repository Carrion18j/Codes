import React from "react";
import { useState } from "react";
import { NewExpence, Expences } from "./components";

const Dummyexpences = [
  {
    id: 0,
    date: new Date(2023, 4, 14),
    tital: "Car Insurance",
    price: 213.12,
  },
  {
    id: 1,
    date: new Date(2024, 5, 24),
    tital: "Plane Ticket",
    price: 500.52,
  },
  {
    id: 2,
    date: new Date(2023, 6, 18),
    tital: "Toilet Paper",
    price: 113.12,
  },
  {
    id: 3,
    date: new Date(2022, 1, 12),
    tital: "House Repair",
    price: 283.12,
  },
];

const App = () => {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const [expenceData, setExpenceData] = useState([]);

  const recivedDataHandler = (expence) => {
    setExpenceData((prevExpence) => {
      return [...prevExpence, expence];
    });
    console.log(expence);
  };

  return (
    <section className="flex lg:flex-row flex-col justify-between bg-slate-700 min-h-[100vh]">
      <div className="">
        <NewExpence recivedData={recivedDataHandler} recivedYear={setYear} />
      </div>
      <div className="lg:mt-0 mt-10 flex lg:justify-normal justify-center">
        <Expences year={year} expencess={expenceData} />
      </div>
      {console.log(expenceData)}
    </section>
  );
};

export default App;
