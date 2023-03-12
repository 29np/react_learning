import React, { useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);

const Grid = (props) => {
  return (
    <div
      style={{
        height: "400px",
        width: "200px",
        background: "orange",
        overflow: "auto",
      }}
    >
      <ReactGridLayout
        compactType={"vertical"}
        cols={6}
        margin={[7, 7]}
        rowHeight={12}
        autoSize={true}
        isBounded={true}
        containerPadding={[0, 0]}
        isDraggable={true}
        isResizable={false}
        useCSSTransforms={true}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div
              key={i}
              data-grid={{
                x: 0,
                y: i * 3,
                w: 6,
                h: 3,
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "yellow" }}
              >
                {i}
              </div>
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
};

export default Grid;
