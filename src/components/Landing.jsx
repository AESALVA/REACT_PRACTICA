import React from "react";

const Landing = ({ contador, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h3>{contador}</h3>
    </div>
  );
};

export default Landing;
