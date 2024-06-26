import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div style={{ border: "4px solid black" }}>
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h3>Contact: @dipakNull</h3>
    </div>
  );
};

export default User;
