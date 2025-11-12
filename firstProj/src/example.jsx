import { useState } from "react";

function Greeting() {
  const [message, setMessage] = useState("Hello Akash");

  function handleChange() {
    setMessage("you clicked the button");
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
}

export default Greeting;