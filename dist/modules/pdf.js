"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("src/utils/logger"));
class PdfOperations {
    open(unit8Array) {
        const pdfData = new Uint8Array(unit8Array.data);
        const blob = new Blob([pdfData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url);
    }
    download(fileName, uint8Array) {
        const pdfBlob = new Blob([uint8Array], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
        logger_1.default.info("PDF file downloaded successfully");
    }
}
exports.default = PdfOperations;
//# sourceMappingURL=pdf.js.map