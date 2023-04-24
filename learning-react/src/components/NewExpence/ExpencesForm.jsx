import React from "react";
import { useState } from "react";
import styles from "../../styles";

const Form = (props) => {
  // Setting useState for data
  const [enteredTital, setEnteredTital] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Storing date
  const titleChangeHandler = (e) => {
    setEnteredTital(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      date: new Date(enteredDate),
      tital: enteredTital,
      price: enteredPrice,
    };

    props.onSaveExpenceData(enteredData);
    setEnteredTital("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div>
        <div className={styles.formDiv}>
          <label htmlFor="" className="p-[20px] w-[25%]">
            Title
          </label>
          <input
            type="text"
            value={enteredTital}
            onChange={titleChangeHandler}
            className="max-h-[46px]  rounded-[8px] bg-white p-[4px] w-[75%]"
          />
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="" className="p-[20px]">
            Amount
          </label>
          <input
            value={enteredPrice}
            sin="0.01"
            type="number"
            onChange={amountChangeHandler}
            className="max-h-[46px]  rounded-[8px] bg-white p-[4px]"
          />
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="" className="p-[20px]">
            Date
          </label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            max="2022-10-31"
            className="max-h-[46px]   bg-white rounded-[8px] bg-purple- p-[4px]"
          />
        </div>
      </div>
      <div className={`${styles.flexs} mt-[10px] font-semibold text-[22px]`}>
        <button
          type="submit"
          className="bg-white text-[22px] p-[12px] rounded-[16px]"
        >
          Add Expences
        </button>
      </div>
    </form>
  );
};

export default Form;
