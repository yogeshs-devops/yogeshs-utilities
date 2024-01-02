import winston, { format } from "winston";


const logger = winston.createLogger({
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
  level: process.env.LOG_LEVEL || 'info',
  format: format.printf((info) => `${JSON.stringify(info, null, 2)}`),
  transports: [new winston.transports.Console()],
});

export default logger;