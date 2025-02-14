import React from "react";
import { Worker, Viewer, ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Heading } from "../typography/Heading";

interface PDFViewerProps {
  fileSrc: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ fileSrc }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <section className="app__wrap">
        <div style={{ marginBlock: "2rem" }}>
          <Heading text="My" highlight="Resume" />
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
