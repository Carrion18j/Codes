import { useReducer } from "react";

const SimpleInput = () => {

  const [state, dispatchState] = useReducer(
    (pervState, action) => {
      switch (action.type) {
        case "InputChange":
          return {
            userName: action.name,
            nameIsTouched: action.nameIsTouched,
            nameIsValid: action.nameIsValid,
          };
        case "Blur":
          return { nameIsTouched: true, nameIsValid: action.nameIsValid };
        case "formIsValid":
          return {
            nameIsTouched: action.nameIsTouched,
            nameIsValid: action.nameIsValid,
          };
      }
      if (pervState.userNameIsValid && !pervState.nameIsTouched) {
        return { formIsValid: true };
      }
    },
    {
      userName: "",
      nameIsValid: false,
      nameIsTouched: false,
      formIsValid: false,
    }
  );

  // const { userName, nameIsValid , formIsValid} = state;
  
  const inputChangeHandeler = (event) => {
    dispatchState({
      title: "InputChange",
      nameIsTouched: event.target.value === "" ? true : false,
      nameIsValid: event.target.value !== "" ? false : true,
    });
  };

  const nameInputBlurHandler = () => {
    dispatchState({
      type: "Blur",
      nameIsTouched: true,
      nameIsValid: state.userName === "" ? false : true,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatchState({
      type: "FomrSubmit",
      nameIsTouched: true,
      nameIsValid: state.userName === "" ? false : true,
    });

    event.target.value = "";
  };

  const formClass = !state.nameIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={inputChangeHandeler}
        />
        {!state.nameIsValid ? (
          <p className="error-text">Entered Name Must Not Be Empty</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
