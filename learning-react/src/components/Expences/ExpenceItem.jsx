import React, { useState } from "react";
import ExpenceDate from "./ExpenceDate";

function ExpenceItem(e) {
  const [tital, setTital] = useState(e.tital);

  return (
    <section className="p-[26px]">
      <div className=" shadow-xl shadow-gray-900 flex bg-gray-900 text-[26px] font-light rounded-[46px] text-[rgb(255,255,255)] justify-between p-[26px]">
        <ExpenceDate date={e.date}></ExpenceDate>
        <div className="border-[4px] border-gray-400 flex text-[26px] font-medium bg-purple-800 rounded-[16px] justify-center items-center px-[26px] mr-[26px]">
          <h2>{tital}</h2>
          <div className="ml-[20px]">${e.price}</div>
          <div className="flex flex-col">
            <button
              onClick={() => {
                setTital("updated");
              }}
              className="border-[2px] border-gray-400 mb-[10px] flex text-[18px] font-normal bg-purple-800 rounded-[16px] ml-[30px] justify-center items-center px-[10px]"
            >
              Change Tital
            </button>
            <button
              onClick={() => {
                setTital(e.tital);
              }}
              className="border-[2px] border-gray-400 flex text-[18px] font-normal bg-purple-800 rounded-[16px] ml-[30px] justify-center items-center px-[10px]"
            >
              Initial Tital
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpenceItem;
