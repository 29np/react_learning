import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = {};

const ReactGrid = () => {
  let l = JSON.parse(JSON.stringify(originalLayouts));
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       layouts: JSON.parse(JSON.stringify(originalLayouts)),
  //     };
  //   }

  const onLayoutChange = (layout, layouts) => {
    console.log(layout, layouts);
    //   this.setState({ layouts });
    // l = { layouts };
  };

  //   render() {
  return (
    <div>
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={l}
        isBounded={true}
        // onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
      >
        <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
          <div className="text">1</div>
        </div>
        <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
          <div className="text">2</div>
        </div>
        <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
          <div className="text">3</div>
        </div>
        <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
          <div className="text">4</div>
        </div>
        <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
          <div className="text">5</div>
        </div>
        <div key="11" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
          <div className="text">1</div>
        </div>
        <div key="21" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
          <div className="text">2</div>
        </div>
        <div key="31" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
          <div className="text">3</div>
        </div>
        <div key="41" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
          <div className="text">4</div>
        </div>
        <div key="51" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
          <div className="text">5</div>
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};
// }

export default ReactGrid;
