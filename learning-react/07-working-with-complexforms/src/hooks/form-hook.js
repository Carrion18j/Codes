import { useState } from "react";

const useData = ({ userNameHandler, userNameBlurHandler }) => {
  const [data, setData] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const nameHandler = (event) => {
    const setSirName = setTimeout(() => {
      if (event.target.value === "") {
        setIsValid(false);
        setIsTouched(true);
        return setData(event.target.value);
      } else {
        setIsValid(true);
        setIsTouched(false);
        return setData(event.target.value);
      }
    }, 1000);
    return () => {
      clearTimeout(setSirName);
    };
  };

  // blur event handlers
  const blurHandler = () => {
    if (data === "") {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
  };

  
  return { isValid, isTouched };
};

export default useData;
