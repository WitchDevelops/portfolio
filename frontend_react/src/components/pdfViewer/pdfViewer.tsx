import React from "react";
import { Worker, Viewer, ProgressBar } from "@react-pdf-viewer/core";
import packageJson from "@/../package.json";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { Heading } from "@components/typography/Heading";
import { DownloadCVButtons } from "@/container/Resume/DownloadCVButtons";

interface PDFViewerProps {
  fileSrc: string;
}

const PDFContainer = styled(motion.div)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: ${({ theme }) => theme.breakpoints.lg};
    margin: auto;
  }
`;

const LoaderWrapper = styled.div`
  width: 240px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PDFViewer: React.FC<PDFViewerProps> = ({ fileSrc }) => {
  const theme = useTheme();
  const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
    >
      <section className="app__wrap" style={{ paddingBottom: "2rem" }}>
        <div style={{ marginBlock: "2rem" }}>
          <Heading text="My" highlight="Resume" />
        </div>
        <DownloadCVButtons fileSrc={fileSrc} />
        <PDFContainer {...theme.animations.fadeIn}>
          <Viewer
            fileUrl={fileSrc}
            renderLoader={(percentages: number) => (
              <LoaderWrapper>
                <ProgressBar progress={Math.round(percentages)} />
              </LoaderWrapper>
            )}
            theme={{ theme: "auto" }}
          />
        </PDFContainer>
      </section>
    </Worker>
  );
};
