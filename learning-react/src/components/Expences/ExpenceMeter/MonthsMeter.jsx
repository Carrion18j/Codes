import React from "react";

const MonthsMeter = (props) => {
  return (
    <div className="flex flex-col p-[12px]">
      <label htmlFor="" className=" font-bold">
        {props.month}
      </label>
      <div className="min-h-[104px] bg-gray-700 rounded-[16px] w-[26px] border-[1px] py-[2px] border-gray-800 flex flex-col items-center justify-between">
        <div className=""></div>
        <div
          className={`bg-slate-50 w-[90%] rounded-b-[16px] ${
            props.percent > 90 ? "rounded-t-[16px]" : ""
          }`}
          style={{ height: `${props.percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MonthsMeter;
