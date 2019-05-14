// events and event emitters
// https://nodejs.org/dist/latest-v10.x/docs/api/events.html

const EventEmitter = require("events");

// Extending the events class
class DemoEmitter extends EventEmitter {}

// initializing object
const instanceOfEmitter = new DemoEmitter();

// Event listener
instanceOfEmitter.on("some_event", () => console.log("Event fired"));

// Initialize Event
instanceOfEmitter.emit("some_event");
instanceOfEmitter.emit("some_event");
instanceOfEmitter.emit("some_event");


// more real world example:
const Logger = require('../logger_for_event_emitter.js');
