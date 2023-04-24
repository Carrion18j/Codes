import React from "react";
import { useState } from "react";
import Form from "./ExpencesForm";
import styles from "../../styles";
import MainMeter from "../Expences/ExpenceMeter/MainMeter";
import ExpecnseFilter from "../Expences/ExpenceMeter/ExpecnseFilter";

const NewExpence = (props) => {
  const [toggle, setToggle] = useState(false);
  
  const filterChangeHandeler = (selectedYear) => {
    props.recivedYear(selectedYear);
  };

  const saveExpenceData = (e) => {
    const expenceData = {
      id: Math.random().toString(),
      ...e,

    };
    props.recivedData(expenceData);
  };

  return (
    <div className=" flex items-center flex-col">
      <button
        className=" bg-gray-600 text-[22px] font-medium p-[8px] my-[16px] rounded-[16px] "
        onClick={() => setToggle((prev) => !prev)}
      >
        Add Expence
      </button>
      <div
        className={`${styles.flexs} ${
          toggle ? "flex" : "hidden"
        } mb-[36px] bg-purple-600 p-[20px] mt-[26px] rounded-[26px] `}
      >
        <Form onSaveExpenceData={saveExpenceData} />
      </div>
      <div className="flex items-center flex-col gap-[36px] mxa-h-[20%]">
        <MainMeter />
        <ExpecnseFilter view="hidde" onChangeHandler={filterChangeHandeler} />
      </div>
    </div>
  );
};

export default NewExpence;
