import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
const ResponsiveGridLayout = WidthProvider(Responsive);

class ReactGridFn2 extends Component {
  handleBreakPointChange = (breakpoint) => {
    // this.breakpoint = breakpoint;
    // this.props.setBreakPoint(breakpoint);
  };

  handleLayoutChange = (newLayout) => {
    console.log("newLayout", newLayout);
    console.log("layouts", this.props);
    console.log("breakpoint", this.breakpoint);
    this.props.layouts[TouchList.breakpoint] = newLayout;
  };

  render() {
    const { data, layouts } = this.props;
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        // onBreakpointChange={this.handleBreakPointChange}
        // onLayoutChange={this.handleLayoutChange}
        // isDraggable
        // isRearrangeable
        // isResizable
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
          a
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>
          b
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          c
        </div>
      </ResponsiveGridLayout>
    );
  }
}

export default ReactGridFn2;
