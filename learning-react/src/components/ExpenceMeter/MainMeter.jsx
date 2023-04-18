import React from "react";
import MonthsMeter from "./MonthsMeter";

const MainMeter = () => {
  return (
    <div className="flex bg-slate-500 rounded-[16px]">
      <MonthsMeter month="Jan" percent="11" />
      <MonthsMeter month="Feb" percent="22" />
      <MonthsMeter month="March" percent="33" />
      <MonthsMeter month="April" percent="44" />
      <MonthsMeter month="May" percent="55" />
      <MonthsMeter month="June" percent="66" />
      <MonthsMeter month="July" percent="77" />
      <MonthsMeter month="Agu" percent="88" />
      <MonthsMeter month="Sep" percent="99" />
      <MonthsMeter month="Oct" percent="12" />
      <MonthsMeter month="Nov" percent="23" />
      <MonthsMeter month="Dec" percent="34" />
    </div>
  );
};

export default MainMeter;
