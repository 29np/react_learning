import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import { useEffect } from "react";
const ReactGridLayout = WidthProvider(RGL);

const ReactGridFn = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const temp = [0, 1, 2, 3, 4].map(function (i) {
      return {
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
      };
    });

    setBlocks(
      temp.map((b, idx) => {
        return createElement(b, idx);
      })
    );
  }, []);

  const createElement = (el, i) => {
    // console.log(el);
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    return (
      <div key={i} data-grid={el}>
        <span className="text">{i}</span>
        <span
          className="remove"
          style={removeStyle}
          onClick={() => {
            onRemoveItem(i);
          }}
        >
          x
        </span>
      </div>
    );
  };

  const onAddItem = () => {
    setBlocks([
      ...blocks,
      {
        x: 2,
        y: Infinity,
        w: 2,
        h: 2,
      },
    ]);
  };

  const onBreakpointChange = (breakpoint, cols) => {};

  const onLayoutChange = (layout) => {
    console.log(layout);
  };

  const onRemoveItem = (i) => {
    console.log("toremove", i);
    const NB = blocks.filter((item, idx) => idx !== i);
    console.log(NB);
    setBlocks(NB);
  };

  return (
    <div style={{ width: "100%" }}>
      <button onClick={onAddItem}>Add Item</button>

      <ReactGridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        isBounded={true}
        layouts={blocks}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
      >
        {blocks}
      </ReactGridLayout>
    </div>
  );
};

export default ReactGridFn;
