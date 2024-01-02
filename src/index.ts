import utility from "./utilities/utility";
import logger from "./utils/logger";
import PdfOperations from "./modules/pdf";
logger.error("this is error",{msg: "this is error"});
logger.info({msg: "Server Listening On Port 3000"});
logger.warn({msg: "this is warning"});
logger.log('error', "test log msg", {msg: "this is warning"})

export { utility, logger, PdfOperations };