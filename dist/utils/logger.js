"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logFormat = winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.cli({ colors: { info: 'blue', error: 'red', warn: 'yellow', success: 'green' } }), winston_1.default.format.printf(info => {
    const { timestamp, level, message } = info;
    return `[${timestamp}] [${level}] ${message}`;
}));
const logger = winston_1.default.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'app.log' })
    ]
});
exports.default = {
    info: (message, data) => {
        logger.log('info', { message, data });
    },
    warning: (message) => {
        logger.warn(message);
    },
    error: (message) => {
        logger.error(message);
    },
    success: (message, data) => {
        logger.log('success', { message, data });
    }
};
//# sourceMappingURL=logger.js.map