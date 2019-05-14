// core modules:
// https://nodejs.org/dist/latest-v10.x/docs/api/
const Logger = require("../logger_for_event_emitter.js");

const logger = new Logger();

logger.on("message", data => console.log("Called listener: ", data));

logger.log("Hello world", 10);
