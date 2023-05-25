import React, { useEffect, useState } from "react";

const BasicForm = (props) => {
  const [userSirName, setUserSirName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userFullName, setUserFullName] = useState("");

  const [sirNameIsValid, setSirNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const userSirnameHandler = (event) => {
    const setSirName = setTimeout(() => {
      if (event.target.value.lenght !== 0) {
        setSirNameIsValid(true);
        return setUserSirName(event.target.value);
      } else {
        setSirNameIsValid(false);
        return setUserSirName(event.target.value);
      }
    }, 1000);
    return () => {
      clearTimeout(setSirName);
    };
  };

  const userLastnameHandler = (event) => {
    const setLastName = setTimeout(() => {
      if (event.target.value.length !== 0) {
        setLastNameIsValid(true);
        return setUserLastName(event.target.value);
      } else {
        console.log(event.target.value.length)
        setLastNameIsValid(false);
        return setUserLastName(event.target.value);
      }
    }, 1000);
    return () => {
      clearTimeout(setLastName);
    };
  };

  // blur event handlers
  const userSirNameBlurHandler = () => {
    if (userLastName.trim().length === 0) {
      setNameIsTouched(true);
    } else {
      setNameIsTouched(false);
    }
  };

  const userLastNameBlurHandler = () => {
    if (userLastName.trim().length === 0) {
      setNameIsTouched(true);
    } else {
      setNameIsTouched(false);
    }
  };

  // oveall form state manager
  useEffect(() => {
    if (sirNameIsValid && lastNameIsValid) {
      setUserFullName(userSirName + " " + userLastName);
      setNameIsValid(true);
    } else if (nameIsValid && !nameIsTouched) {
      setFormIsValid(true);
    } else {
      console.log(userSirName, userLastName, sirNameIsValid, lastNameIsValid);
      setUserFullName(userSirName + " " + userLastName);
      setNameIsValid(false);
    }
  }, [userSirName, userLastName, sirNameIsValid, lastNameIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      setUserSirName("");
      setUserLastName("");
      return;
    } else {
      console.log("form Validity" + formIsValid);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={userSirnameHandler}
            onBlur={userSirNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={userLastnameHandler}
            onBlur={userLastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
