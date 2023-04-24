import React, { useState } from "react";
import ExpenceDate from "./ExpenceDate";
import styles from "../../styles";

function ExpenceItem(e) {
  return (
    <section className="p-[16px] ">
      <div className=" md:flex-row flex-col items-center shadow-xl shadow-gray-900 flex bg-gray-900 text-[2rem] font-light rounded-[46px] text-white justify-between p-[2%]">
        <div className="md:mt-0 mt-5">
          <ExpenceDate date={e.date}></ExpenceDate>
        </div>
        <div
          className={`${styles.flexs} md:mt-0 mt-5 ss:flex-row flex-col min-w-[260px] min-h-[130px] border-[4px] border-gray-400 text-[1.6rem] font-medium bg-purple-800 rounded-[16px] px-[1.6rem] `}
        >
          <h2>{e.tital}</h2>
          <div className="ml-[1.2rem]">${e.price}</div>
        </div>
      </div>
    </section>
  );
}

export default ExpenceItem;
