import React, { useState } from "react";

function Child(props) {
  const [c1, setc1] = useState("Initial 1");

  console.log("Child 1");
  return (
    <>
      
      <button
        onClick={() => {
          props.change("Bye!");
        }}
      >
        Child 1 Button
      </button>
    </>
  );
}

export default Child;
