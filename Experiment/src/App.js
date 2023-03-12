import React, { useEffect, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";
import Child1 from "./Child1";
import ReactGrid from "./ReactGrid";
import ReactGridFn2 from "./ReactGridFn2";

function App() {
  const [v, setV] = useState("1000px");

  return <ReactGridFn2 />;
  return (
    <>
      <button
        onClick={() => {
          if (v === "500px") setV("1000px");
          else setV("500px");
        }}
      >
        Set Size
      </button>
      <div style={{ width: v, backgroundColor: "wheat" }}>
        {/* <ReactGridFn1 /> */}
      </div>
      {/* <ReactGrid /> */}
    </>
  );
}

export default App;
