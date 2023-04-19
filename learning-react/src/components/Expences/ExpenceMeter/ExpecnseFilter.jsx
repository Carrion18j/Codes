import React from "react";

const ExpecnseFilter = (props) => {
  const year = new Date().getFullYear();

  const dropdownChangeHandler = (e) => {
    props.onChangeHandler(e.target.value);
  };

  return (
    <div
      className={`${props.view} bg-slate-400 flex justify-center items-center rounded-[16px] h-[80px] aspect-[3/1]`}
    >
      <select
        onChange={dropdownChangeHandler}
        className="rounded-[16px] bg-gray-600 p-[8px] text-white "
      >
        <option value={year}>{year}</option>
        <option value={year - 1}>{year - 1}</option>
        <option value={year - 2}>{year - 2}</option>
        <option value={year - 3}>{year - 3}</option>
      </select>
    </div>
  );
};

export default ExpecnseFilter;
