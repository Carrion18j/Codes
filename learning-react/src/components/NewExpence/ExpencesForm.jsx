import React from "react";
import { useState } from "react";
import styles from "../../styles";

const From = (props) => {
  // Setting useState for data
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Storing date
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenceData(enteredData);
    setEnteredTitle("");
    setEnteredAmount("");
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
            value={enteredTitle}
            onChange={titleChangeHandler}
            className="max-h-[46px]  rounded-[8px] bg-white p-[4px] w-[75%]"
          />
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="" className="p-[20px]">
            Amount
          </label>
          <input
            value={enteredAmount}
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

export default From;
