import React from "react";
import ExpenceItem  from "./ExpenceItem";
import { expencess } from "../../data";

const Expences = () => {

  return (
    <div className="min-w-[80%] scale-[80%] bg-slate-800 rounded-[16px] pt-[20px] shadow-xl shadow-gray-900">
      <ExpenceItem
        tital={expencess[0].tital}
        date={expencess[0].date}
        price={expencess[0].price}
      />
      <ExpenceItem
        tital={expencess[1].tital}
        date={expencess[1].date}
        price={expencess[1].price}
      />
      <ExpenceItem
        tital={expencess[2].tital}
        date={expencess[2].date}
        price={expencess[2].price}
      />
      <ExpenceItem
        tital={expencess[3].tital}
        date={expencess[3].date}
        price={expencess[3].price}
      />
    </div>
  );
};

export default Expences;
