"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfOperations = exports.logger = exports.utility = void 0;
const utility_1 = __importDefault(require("./utilities/utility"));
exports.utility = utility_1.default;
const logger_1 = __importDefault(require("./utils/logger"));
exports.logger = logger_1.default;
const pdf_1 = __importDefault(require("./modules/pdf"));
exports.PdfOperations = pdf_1.default;
logger_1.default.error("this is error", { msg: "this is error" });
logger_1.default.info({ msg: "Server Listening On Port 3000" });
logger_1.default.warn({ msg: "this is warning" });
logger_1.default.log('error', "test log msg", { msg: "this is warning" });
//# sourceMappingURL=index.js.map