const url = require("url");

const exampleUrl = new URL(
  "http://www.example.com/billygoat.html?id=12545&status=active"
);

// Serialized URL
console.log(exampleUrl.href);

// also you could just use the js module, .toString()
console.log(exampleUrl.toString());

// Host (root domain, also gets the port)
console.log(exampleUrl.host);

// Hostame (sans port)
console.log(exampleUrl.hostname);

// Path name
console.log(exampleUrl.pathname);

// Serialized query, pretty much everything after ?
console.log(exampleUrl.search);

// Params object (query)
console.log(exampleUrl.searchParams);

// Append Paramters
exampleUrl.searchParams.append("whoa", "532", "nope");
console.log(exampleUrl.searchParams);

// Looping through parameters
// notice the syntax of the looping algorithm 
exampleUrl.searchParams.forEach((value, key) =>
  console.log(`${key}: ${value}`)
);
