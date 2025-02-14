import React from "react";
import { Worker, Viewer, ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Heading } from "../typography/Heading";

interface PDFViewerProps {
  fileSrc: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ fileSrc }) => {
  return (
    <Worker workerUrl="/pdfviewer/worker.js">
      <section className="app__wrap">
        <div style={{ marginBlock: "2rem" }}>
          <Heading text="My" highlight="Resume" />
        </div>
        <div>
          <p>In case the preview below doesn't display</p>
          <div>
            <a href={fileSrc} target="_blank" rel="noreferrer">
              Open the CV in the new tab
            </a>
            <a href={fileSrc} download>
              Download the CV
            </a>
          </div>
        </div>
        <Viewer
          fileUrl={fileSrc}
          renderLoader={(percentages: number) => (
            <div style={{ width: "240px", height: "300px" }}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          )}
          theme={{
            theme: "auto",
          }}
        />
      </section>
    </Worker>
  );
};
