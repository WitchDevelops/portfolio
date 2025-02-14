import { Skills } from "../container";
import { PDFViewer } from "../components/pdfViewer/pdfViewer";

export const ForRecruitersPage = () => {
    return (
        <div >
            <Skills />
            <PDFViewer fileSrc="/assets/files/Wojewska_CV_2025-01.pdf" />
        </div>
    )
}
