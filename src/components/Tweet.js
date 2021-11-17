import React, { useState } from "react";
import "./App.css";

function Tweet({ name, message }) {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Emma",
    age: 25,
    posts: ["Amadeus good", "Amadeus not bad"],
  });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="tweet">
      {/* <button onClick={increment}>Increment</button>
      <h1 className={isRed ? "red" : ""}>{count}</h1> */}
      <p>{name}</p>
      <h1>{message}</h1>
      {/* <h3>{name}</h3>
      <p>{message || "Poop"}</p>
      <h4>4 likes</h4> */}
    </div>
  );
}

export default Tweet;
