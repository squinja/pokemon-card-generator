import React from "react";

const Pokemon = ({ name, type }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
};

export default Pokemon;
