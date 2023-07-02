import React from "react";

const Tasks = ({ data }) => {
  const { checkBox, description, id, title, date } = data;

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h1 style={{ color: `${checkBox ? "green" : "red"}` }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Tasks;
