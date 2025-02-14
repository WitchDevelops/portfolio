import React from "react";
import styled from "styled-components";

interface PDFViewerProps {
  fileSrc: string;
}

const StyledPDFViewer = styled.div`
  width: 100%;
  height: 100vh;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const PDFViewer: React.FC<PDFViewerProps> = ({ fileSrc }) => {
  return (
    <StyledPDFViewer>
      <iframe src={fileSrc} />
    </StyledPDFViewer>
  );
};
