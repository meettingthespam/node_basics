// https://nodejs.org/dist/latest-v10.x/docs/api/os.html
const os = require("os");

// Platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free Memory available
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());


// Home directory
console.log(os.homedir());


// Uptime (in seconds)
console.log(os.uptime());
