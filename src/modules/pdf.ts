import logger from "../utils/logger";

class PdfOperations {
    open(unit8Array: any) {
        const pdfData = new Uint8Array(unit8Array.data);
        const blob = new Blob([pdfData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url);
    }
    download(fileName: string, uint8Array: any) {
        const pdfBlob = new Blob([uint8Array], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
        logger.info("PDF file downloaded successfully", )
    }
}

export default PdfOperations;