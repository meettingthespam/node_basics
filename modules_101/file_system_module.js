// File System
// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
const fs = require("fs");

const path = require("path");

// most times you'll want to use the asynchronous version
// but there is a synchronous version too (check the docs)

// Create Folder
fs.mkdir(path.join(__dirname, "/made_with_fs"), {}, function(err) {
  if (err) console.log(err);
  console.log("Folder created...");
});

// syntax is .join(directory_path, "/name of new directory",
// {any options, make sure to leave blank in none}, anyFunctionsYouWantToCall())

// to make it more ES6:
// with an arrow funciton and only one parameter:
fs.mkdir(path.join(__dirname, "/made_with_fs_es6"), {}, err => {
  if (err) console.log(err); // note if you did "throw err" it'd crash the program if any errors
  console.log("Folder created...");
});

// you can create files with .open()
// if you want to create and write to the file at same time
// then use .write()

// Create and write to file
// which if ran again, it'll overwrite whatever
// was in the file previously
fs.writeFile(
  path.join(__dirname, "/made_with_fs_es6", "created_and_written_to.txt"),
  "hello there newly created file",
  err => {
    if (err) console.log(err);
    console.log("new file made...");
  }
);

// appending to already written files:
fs.appendFile(
  path.join(__dirname, "/made_with_fs_es6", "created_and_written_to.txt"),
  "\nHello there newly APPENDED SENTENCE",
  err => {
    if (err) console.log(err);
    console.log("new file made...");
  }
);

// Read File (with encoding specified):
fs.readFile(
  path.join(__dirname, "/made_with_fs_es6", "created_and_written_to.txt"),
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
    console.log(`readfile with 'utf-8': \n`, data);
  }
);

// Read File (without encoding specified):
fs.readFile(
  path.join(__dirname, "/made_with_fs_es6", "created_and_written_to.txt"),
  {},
  (err, data) => {
    if (err) console.log(err);
    console.log("readfile without 'utf-8':\n ", data[0,10]);
  }
);

// Renaming a file:
// similar convention as linux renaming of folders in CLI
fs.rename(
  path.join(__dirname, "/made_with_fs_es6", "file.txt"),
  path.join(__dirname, "/made_with_fs_es6", "re_fuckin_named.txt"),
  err => {
    if (err) console.log(err);
    console.log("File renamed, boi...");
  }
);
