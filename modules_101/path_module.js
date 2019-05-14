// https://nodejs.org/dist/latest-v10.x/docs/api/path.html
const path = require('path');


// Base file name
console.log("Basename: ", path.basename(__filename));


// Just directory name
console.log("Directory name: ",path.dirname(__filename));


// File extension
console.log("Extension: ", path.extname(__filename));


// Create path object
console.log("Create path object with Parse: \n ", path.parse(__filename));


// since this is an object, we can access any property
console.log("we can access any property with Parse: \n ", path.parse(__filename).base);


// Concatenate path (aka join paths)
// this will return -p ./Node/reference/test/hello.html
// but it won't build it since we're just logging it here
console.log(path.join(__dirname, 'test', 'hello.html'));
/*
this works really well with delimeters ^
(meaning windows vs mac/linux with the forward vs back slashes
for directory movement)
*/
