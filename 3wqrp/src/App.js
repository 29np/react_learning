import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Worker, Viewer, Position, Tooltip } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { highlightPlugin, MessageIcon } from "@react-pdf-viewer/highlight";
import { propertiesPlugin } from "@react-pdf-viewer/properties";
import { Fragment, useState } from "react";

import "./styles.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/highlight/lib/styles/index.css";
import "@react-pdf-viewer/properties/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import pdfUrl from "./Historical_and_current_range_of_the_Near_Threatene.pdf";

const workerUrl =
  "https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js";

export default function App() {
  const [notes, setNotes] = useState([]);

  const renderHighlightTarget = (props) => {
    const highlightContent = () => {
      const note = {
        id: Math.random() * 100,
        highlightAreas: props.highlightAreas,
        content: props.selectedText,
      };
      const sortedNotes = [...notes, note];
      console.log(sortedNotes);
      sortedNotes.sort((a, b) => {
        if (
          a.highlightAreas[0].pageIndex - b.highlightAreas[0].pageIndex !==
          0
        ) {
          return a.highlightAreas[0].pageIndex - b.highlightAreas[0].pageIndex;
        }
        return a.highlightAreas[0].top - b.highlightAreas[0].top;
      });
      setNotes(sortedNotes);
      props.toggle();
    };
    highlightContent();
    // return (
    //   <div
    //     style={{
    //       display: "flex",
    //       position: "absolute",
    //       left: `${props.selectionRegion.left}%`,
    //       top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
    //       transform: "translate(0, 8px)",
    //     }}
    //   >
    //     <Tooltip
    //       position={Position.TopCenter}
    //       target={
    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           onClick={highlightContent}
    //         >
    //           <BorderColorIcon />
    //         </Button>
    //       }
    //       content={() => <div style={{ width: "100px" }}>highlight</div>}
    //       offset={{ left: 0, top: -8 }}
    //     />
    //   </div>
    // );
  };

  const renderHighlights = (props) => {
    return (
      <div>
        {notes.map((note) => {
          return (
            <Fragment key={note.id}>
              {note.highlightAreas
                // Filter all highlights on the current page
                .filter((area) => area.pageIndex === props.pageIndex)
                .map((area) => {
                  const styles = {
                    ...props.getCssProperties(area, props.rotation),
                  };
                  return (
                    <Fragment key={Math.random() * 100}>
                      <div style={styles} />
                    </Fragment>
                  );
                })}
            </Fragment>
          );
        })}
      </div>
    );
  };

  const highlightPluginInstance = highlightPlugin({
    renderHighlightTarget,
    renderHighlights,
  });
  const { jumpToHighlightArea } = highlightPluginInstance;

  function SidebarNotes() {
    const removeHighlight = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    };

    return (
      <div style={{ width: "100%" }}>
        {notes.length === 0 && (
          <div style={{ textAlign: "center" }}>There is no note</div>
        )}
        {notes.map((note) => {
          return (
            <div
              key={note.id}
              onClick={() => jumpToHighlightArea(note.highlightAreas[0])}
              role="button"
              tabIndex="0"
              style={{ display: "flex" }}
            >
              <div>
                <Typography style={{ color: "white" }} variant="body2">
                  Quote: {note.content}
                </Typography>
              </div>
              <div>
                <Typography variant="caption">
                  Page: {note.highlightAreas[0].pageIndex + 1}
                </Typography>
              </div>
              <div>
                <IconButton onClick={() => removeHighlight(note.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  const propertiesPluginInstance = propertiesPlugin();

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0],
      defaultTabs[1],
      { content: <SidebarNotes />, icon: <MessageIcon />, title: "Notes" },
    ],
  });

  return (
    <div className="App">
      <Worker workerUrl={workerUrl}>
        <div style={{ width: "100%", height: "85vh" }}>
          {pdfUrl && (
            <Viewer
              theme="dark"
              fileUrl={pdfUrl}
              plugins={[
                defaultLayoutPluginInstance,
                highlightPluginInstance,
                propertiesPluginInstance,
              ]}
            />
          )}
        </div>
      </Worker>
    </div>
  );
}
