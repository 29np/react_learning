import React, { useState } from "react";
import Child1 from "./Child1";
import Child from "./Child";

let val = "Top Value";

function Parent() {
  console.log("In Parent");
  const [v, sv] = useState("Hello");
  const setHandler = () => {
    val = "Hi";
    sv("Hi");
  };
  console.log(val);
  let a = [1, 2, 3];
  a.map((b) => {
    b = 1;
  });
  console.log(a);
  return (
    <>
      <div>Hello from Parent</div>
      <button>Parent Button</button>
      <div>{v}</div>
      <Child set={setHandler} />
      <Child1 />
    </>
  );
}

export default Parent;
