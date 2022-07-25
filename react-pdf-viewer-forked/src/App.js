import React from "react";
import "./styles.css";
// import { Worker } from "@phuocng/react-pdf-viewer";
import { highlightPlugin, MessageIcon } from "@react-pdf-viewer/highlight";
import {
  Button,
  Position,
  Tooltip,
  Viewer,
  Worker,
  PrimaryButton
} from "@react-pdf-viewer/core";
import DOC from "./pdf.pdf";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useState } from "react";
// import "@react-pdf-viewer/highlight/lib/styles/index.css";
// import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  let noteId = notes.length;

  console.warn("notes", notes);

  const renderHighlightTarget = (props) => {
    console.warn("ASFASF", props);
    return (
      <div
        style={{
          background: "#eee",
          display: "flex",
          position: "absolute",
          left: `${props.selectionRegion.left}%`,
          top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
          transform: "translate(0, 8px)"
        }}
      >
        <Tooltip
          position={Position.TopCenter}
          target={
            <Button onClick={props.toggle}>
              <MessageIcon />
            </Button>
          }
          content={() => <div style={{ width: "100px" }}>Rot</div>}
          offset={{ left: 0, top: -8 }}
        />
        <Tooltip
          position={Position.TopCenter}
          target={
            <Button onClick={props.toggle}>
              <MessageIcon />
            </Button>
          }
          content={() => <div style={{ width: "100px" }}>Grün</div>}
          offset={{ left: 0, top: -8 }}
        />
      </div>
    );
  };
  const renderHighlightContent = (props) => {
    const red = () => {
      console.log(props);
      if (message !== "") {
        const note = {
          id: ++noteId,
          content: message,
          highlightAreas: props.highlightAreas,
          quote: props.selectedText
        };
        setNotes(notes.concat([note]));
        props.cancel();
      }
    };
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0, 0, 0, .3)",
          borderRadius: "2px",
          padding: "8px",
          position: "absolute",
          left: `${props.selectionRegion.left}%`,
          top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
          zIndex: 1
        }}
      >
        <div>
          <textarea
            rows={3}
            style={{
              border: "1px solid rgba(0, 0, 0, .3)"
            }}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "8px"
          }}
        >
          <div style={{ marginRight: "8px" }}>
            <PrimaryButton onClick={red}>Add</PrimaryButton>
          </div>
          <Button onClick={props.cancel}>Cancel</Button>
        </div>
      </div>
    );
  };
  const renderHighlights = (props) => (
    <div>
      {notes.map((note) => (
        <React.Fragment key={note.id}>
          {note.highlightAreas
            .filter((area) => area.pageIndex === props.pageIndex)
            .map((area, idx) => (
              <div
                key={idx}
                style={Object.assign(
                  {},
                  {
                    background: "yellow",
                    opacity: 0.4
                  },
                  props.getCssProperties(area, props.rotation)
                )}
              />
            ))}
        </React.Fragment>
      ))}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlightTarget,
    renderHighlightContent,
    renderHighlights
  });

  return (
    <div className="App">
      <h1>PDF Testing</h1>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js">
        <div
          style={{ height: "500px", border: "1px solid rgba(250, 0, 250, 1)" }}
        >
          <Viewer
            initialPage={3}
            fileUrl={DOC}
            plugins={[highlightPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}
