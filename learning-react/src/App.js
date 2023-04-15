import React from "react";
import { Expences } from "./components";
import "./data";

const App = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-700">
      <Expences/>
    </section>
  );
};

export default App;
