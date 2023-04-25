import React from "react";
import ExpenceItem from "./ExpenceItem";

const Expences = (props) => {
  return (
    <div className="w-[50vw] mr-[20px] bg-slate-800 rounded-[16px] pt-[20px] shadow-xl shadow-gray-900">
      {props.expencess.map((e) => {
        return (
          <div>
            {props.year == e.date.getFullYear() ? (
              <ExpenceItem
                key={e.id}
                tital={e.tital}
                date={e.date}
                price={e.price}
              />
            ) : (
              ""
            )}
            {props.year == "All Items" ? (
              <ExpenceItem
                key={e.id}
                tital={e.tital}
                date={e.date}
                price={e.price}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Expences;