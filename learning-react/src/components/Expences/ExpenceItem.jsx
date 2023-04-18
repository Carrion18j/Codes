import React, { useState } from "react";
import ExpenceDate from "./ExpenceDate";
import styles from "../../styles";

function ExpenceItem(e) {
  const [tital, setTital] = useState(e.tital);

  return (
    <section className="p-[26px]">
      <div className=" ss:flex-row flex-col  shadow-xl shadow-gray-900 flex bg-gray-900 text-[2rem] font-light rounded-[46px] text-[rgb(255,255,255)] justify-between p-[2%]">
        <ExpenceDate date={e.date}></ExpenceDate>
        <div className={`${styles.flexs} border-[4px] border-gray-400 text-[1.6rem] font-medium bg-purple-800 rounded-[16px] px-[1.6rem] mr-[1.6rem]`}>
          <h2>{tital}</h2>
          <div className="ml-[1.2rem]">${e.price}</div>
          <div className="flex flex-col">
            <button
              onClick={() => {
                setTital("updated");
              }}
              className={`${styles.flexs} border-[2px] border-gray-400 mb-[10px] text-[1.2rem] font-normal bg-purple-800 rounded-[16px] ml-[2.2rem] px-[0.8rem]`}
            >
              Change Tital
            </button>
            <button
              onClick={() => {
                setTital(e.tital);
              }}
              className={`${styles.flexs} border-[2px] border-gray-400 text-[1rem] font-normal bg-purple-800 rounded-[16px] ml-[2rem] px-[0.8rem]`}
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
