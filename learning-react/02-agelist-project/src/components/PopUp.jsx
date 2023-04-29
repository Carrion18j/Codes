import React from "react";

const PopUp = (props) => {
  let  PopErrer = "";
  if (props.name === "") {
    PopErrer = "Please enter a name first before submitting";
  }
  if (props.age === "") {
    PopErrer = "Please enter a age first before submitting";
  }
  if (props.age < 0) {
    PopErrer = "Please enter a valid age first before submitting";
  }

  return (
    <div>
      {props.poperrer !== "" ? (
        <div className="popup-container" onClick={() => props.state(false)}>
          <div>Invalid Input</div>
          <div>{PopErrer}</div>
          <div>
            <button className="button" onClick={() => props.state(false)}>
              Ok
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PopUp;