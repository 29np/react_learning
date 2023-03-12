import React, { useEffect, useState } from "react";

function Child1(props) {
  // const [c2, setc2] = useState("Initial 2");

  // useEffect(() => {
  //   console.log("Changeddddd...");
  // }, [props.v]);

  console.log("Child 2");
  return (
    <>
      <div>IN child 11111</div>
      <div>{props.v}</div>
    </>
  );
}

export default Child1;
