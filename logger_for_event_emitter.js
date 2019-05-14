// generating random IDs
const EventEmitter = require('events');
const fs = require('fs');

class Logger extends EventEmitter {
  log(msg, id) {
    // calling the event (this could also be writter id, msg)
    this.emit('message', { id:id, msg:msg});
  }};

//   fs.appendFile(path.join(__dirname, "/logger", "logs.txt"),
//   logged_data, err => { if (err) console.log(err);
//   console.log("logged data...");
// });
// }

// TRY THIS SOON!
// cluster fuck of a writing the messages to a file, try later
// IDEA WAS TO TAKE THE EMITTED MESSAGE AS A CONSTANT,
// AND WRITE IT TO A FILE, ISSUE IS YOU'D HAVE TO KEEP APPENDING IT TO THE NEWLY WRITTEN FILE,
// BECAUSE .writeFile WILL OVERWRTIE THE DATA,
// ALSO NEED TO CHECK IF FILE WAS CREATED. EASY WAY WOULD BE JUST TO HAVE THE FILE ALREADY CREATED AND APPEND TO IT
// that idea <- was tried above ^^

// fs.writeFile(
//   path.join(__dirname, "/make_with_logger", "logs.txt"),
//   "hello there newly created file",
//   err => {
//     if (err) console.log(err);
//     console.log("new file made...");
//   }
// );
//
//
// fs.open(
//   path.join(__dirname, "/make_with_logger", "logs.txt"), 'wx', (err, fd) => {
//   if (err) {
//     if (err.code === 'EEXIST') {
//       console.error('myfile already exists');
//     }
//     // appending to already written files:
//     fs.appendFile(
//       path.join(__dirname, "/make_with_logger", "logs.txt"),
//       logged_data,
//       err => {
//         if (err) console.log(err);
//         console.log("new file made...");
//       }
//     )
//     )
//
//
//
//   writeMyData(fd);
// });
//
//
//
//
// module.exports = Logger;
