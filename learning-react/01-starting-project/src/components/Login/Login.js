import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import InputBlock from "./InputBlock";

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    (state, action) => {
      if (action.type === "INPUT_EMAIL") {
        return { value: action.value, isValid: action.value.includes("@") };
      }
      if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
      }
      return { value: "", isValid: false };
    },
    {
      value: "",
      isValid: undefined,
    }
  );

  const [passwordState, dispatchPassword] = useReducer(
    (state, action) => {
      if (action.type === "INPUT_PASSWORD") {
        return { value: action.value, isValid: action.value.trim().length > 6 };
      }
      if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
      }
      return { value: "", isValud: false };
    },
    {
      value: "",
      isValid: undefined,
    }
  );

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!isEmailValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [isEmailValid, isPasswordValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputBlock
          ref={emailInputRef}
          name={"E-mail"}
          id={"e-mail"}
          type={"email"}
          clas={classes}
          ChangeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
          State={emailState}
        />
        <InputBlock
          ref={passwordInputRef}
          name={"Password"}
          id={"password"}
          type={"password"}
          clas={classes}
          ChangeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
          State={passwordState}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// import React, { useEffect, useReducer, useContext, useRef } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";
// import InputBlock from "./InputBlock";

// const Login = () => {
//   const ctx = useContext(AuthContext);

//   // Whole form state
//   const [formValidity, formValidityDispatch] = useReducer(
//     (state, action) => {
//       if (action.EmailType === "INPUT_EMAIL") {
//         return {
//           EmailValue: action.EmailValue,
//           EmailValid: action.value.includes("@"),
//         };
//       }
//       if (action.EmailType === "INPUT_BLUR") {
//         return {
//           EmailValue: state.EmailValue,
//           EmailValid: state.value.includes("@"),
//         };
//       }
//       if (action.PasswordType === "INPUT_PASSWORD") {
//         return {
//           PasswordValue: action.PasswordValue,
//           PasswordValid: action.value.trim().length > 6,
//         };
//       }
//       if (action.PasswordType === "INPUT_BLUR") {
//         return {
//           PasswordValue: state.PasswordValue,
//           PasswordValid: state.value.trim().length > 6,
//         };
//       }
//       if (state.EmailValid && state.PasswordValid) {
//         return { validity: true };
//       }

//       return { value: "", isValud: false };
//     },
//     {
//       PasswordValue: "",
//       EmailValue: "",
//       EmailValid: false,
//       PasswordValid: false,
//       validity: false,
//     }
//   );

//   // handelers
//   const emailChangeHandler = (event) => {
//     formValidityDispatch({
//       EmailType: "INPUT_EMAIL",
//       EmailValue: event.target.value,
//     });
//   };

//   const validateEmailHandler = () => {
//     formValidityDispatch({ EmailType: "INPUT_BLUR" });
//   };

//   const passwordChangeHandler = (event) => {
//     formValidityDispatch({
//       PasswordType: "INPUT_PASSWORD",
//       PasswordValue: event.target.value,
//     });
//   };

//   const validatePasswordHandler = () => {
//     formValidityDispatch({ PasswordType: "INPUT_BLUR" });
//   };

//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (formValidity.validity) {
//       ctx.onLogin(formValidity.EmailValid, formValidity.PasswordValid);
//     } else if (!formValidity.EmailValid) {
//       emailInputRef.current.focus();
//     } else {
//       passwordInputRef.current.focus();
//     }
//   };

//   useEffect(() => {
//     const identifier = setTimeout(() => {
//       formValidityDispatch({
//         validity: formValidity.EmailValid && formValidity.PasswordValid,
//       });
//     }, 500);

//     return () => {
//       clearTimeout(identifier);
//     };
//   }, [formValidity.EmailValid, formValidity.PasswordValid]);

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <InputBlock
//           ref={emailInputRef}
//           name={"E-mail"}
//           id={"e-mail"}
//           type={"email"}
//           clas={classes}
//           ChangeHandler={emailChangeHandler}
//           validateHandler={validateEmailHandler}
//           State={formValidity.EmailValid}
//         />
//         <InputBlock
//           ref={passwordInputRef}
//           name={"Password"}
//           id={"password"}
//           type={"password"}
//           clas={classes}
//           ChangeHandler={passwordChangeHandler}
//           validateHandler={validatePasswordHandler}
//           State={formValidity.PasswordValid}
//         />
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
