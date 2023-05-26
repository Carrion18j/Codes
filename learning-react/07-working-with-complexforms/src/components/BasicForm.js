import React, { useEffect, useState } from "react";
import useData from "../hooks/form-hook";

const BasicForm = () => {
  const userSirnameHandler = (event) => {
    return event;
  };
  const userSirNameBlurHandler = () => {};

  const { isValid, isTouched } = useData({
    userSirnameHandler,
    userSirNameBlurHandler,
  });

  console.log(isValid, isTouched);

  return (
    <form>
      <div className="control-group">
        <div className={""}>
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
          <input type="text" id="name" />
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

// const [userSirName, setUserSirName] = useState("");
//   const [sirNameIsValid, setSirNameIsValid] = useState(false);
//   const [sirNameIsTouched, setSirNameIsTouched] = useState(false);
//   const [formClass, setFormClass] = useState("form-control");
//   const [formIsValid, setFormIsValid] = useState(false);

//   const userSirnameHandler = (event) => {
//     const setSirName = setTimeout(() => {
//       if (event.target.value.lenght === 0) {
//         setFormClass("form-control invalid");
//         setSirNameIsValid(false);
//         return setUserSirName(event.target.value);
//       } else {
//         setFormClass("form-control ");
//         setSirNameIsValid(true);
//         setSirNameIsTouched(false);
//         return setUserSirName(event.target.value);
//       }
//     }, 1000);
//     return () => {
//       clearTimeout(setSirName);
//     };
//   };

//   // blur event handlers
//   const userSirNameBlurHandler = () => {
//     if (userSirName === "") {
//       setSirNameIsTouched(true);
//     } else {
//       setSirNameIsTouched(false);
//     }
//   };

//   // oveall form state manager
//   useEffect(() => {
//     if (!sirNameIsTouched && sirNameIsValid) {
//       setFormIsValid(true);
//     } else if (sirNameIsTouched && !sirNameIsValid) {
//       setFormClass("form-control invalid");
//     } else if (sirNameIsTouched && userSirName === "") {
//       setSirNameIsValid(false);
//     } else {
//       setFormIsValid(false);
//     }
//   }, [sirNameIsTouched, sirNameIsValid]);

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (formIsValid) {
//       setUserSirName("");
//     } else {
//       setSirNameIsValid(false);
//     }
//   };
