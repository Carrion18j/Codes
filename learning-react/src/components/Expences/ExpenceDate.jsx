import React from "react";

const ExpenceDate = (e) => {
  const year = e.date.getFullYear();
  const month = e.date.toLocaleString("en-US", { month: "long" });
  const day = e.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className=" border-[4px] border-gray-400 bg-slate-500 ml-[26px] p-[2px] rounded-[16px] w-[160px] flex flex-col items-center text-gray-300">
      <div className=" font-semibold text-[32px]">{year}</div>
      <div className=" font-medium text-[28px]">{month}</div>
      <div className=" font-semibold text-[24px]">{day}</div>
    </div>
  );
};

export default ExpenceDate;