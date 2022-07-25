import React, { useEffect, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";
import Child1 from "./Child1";
import ReactGrid from "./ReactGrid";

function App() {
  console.log("In Grand Parent");
  const [v, setV] = useState("Hello");

  let temp = [];

  useEffect(() => {
    temp = [0, 0, 0].map(() => {
      return <Child1 v={v} />;
    });
  }, [v]);
  return (
    <>
      {/* {v}
      <button
        onClick={() => {
          setV((Math.random() + 1).toString(36).substring(7));
        }}
      >
        Change Text
      </button>
      <br />
      <Child v={v} />
      <br />
      {temp} */}
      <ReactGrid />
    </>
  );
}

export default App;
