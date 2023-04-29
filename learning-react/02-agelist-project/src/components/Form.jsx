import React from "react";
import { useState } from "react";
import PopUp from "./PopUp";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [popState, setPopState] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "" || age < 0 || age === "") {
      return setPopState(true);
    }
    popState && setPopState(false);
    const userData = { id: Math.random().toString(), name: name, age: age };
    props.onAddUser(userData);
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div>
        <label htmlFor="" className="lable">
          Name:
        </label>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(Name) => setName(Name.target.value)}
        />
      </div>
      <div>
        <label htmlFor="" className="lable">
          Age:
        </label>
        <input
          type="number"
          className="input"
          value={age}
          onChange={(Age) => setAge(Age.target.value)}
        />
      </div>
      <div>
        <button className="button">Add User</button>
      </div>
      {popState ? (
        <PopUp
          state={e => setPopState(e)}
          name={name}
          age={age}
        />
      ) : (
        ""
      )}
    </form>
  );
};

export default Form;
