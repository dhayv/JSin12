// Day 1

// JS syntax
split(separator, limit) 

  var today = "Today was a very productive day";
  console.log(today.split(" ", 3)); // Limiting split to 3 elements
  // Output: [ 'Today', 'was', 'a' ]
  
  var tricky = "goshgoshgoshgoshgoshgoshgoshgosh";
  console.log(tricky.split("sh"));
  // Output: [ 'go', 'go', 'go', 'go', 'go', 'go', 'go', 'go', '' ]

// Python syntax
split(separator, maxlimit) 

  today = "Today was a very productive day";
  print(today.split(" ",3));
  // Output: [ 'Today', 'was', 'a' ]
  
  tricky = "goshgoshgoshgoshgoshgoshgoshgosh";
  print(tricky.split("sh"));
  // Output: [ 'go', 'go', 'go', 'go', 'go', 'go', 'go', 'go', '' ]


// Day 2
// JS syntax
slice(start,end) Array Method/List

  var array = ['fire', 'water', 'ice', 'steam', 'sand', 'grass']
  console.log(array.slice(0,4)); 
  // Output: [ 'fire', 'water', 'ice', 'steam' ]

  console.log(array.slice(-5,-2));
  // Output: [ 'water', 'ice', 'steam' ]

// Python syntax
list[start:end:step] Array Method/List

  array = ['fire', 'water', 'ice', 'steam', 'sand', 'grass']
  print(array[0:4])
  // Output: [ 'fire', 'water', 'ice', 'steam' ]

  print(array[-5:-2])
  // Output: ['water', 'ice', 'steam' ]


// Day 3
// JS Syntax
slice()
substring() cant except negatives
substr(start,length) start is required

  var string = "Now it's my turn to try it out."
  console.log(string.substr(0,8)); 
  // Output: "Now it's"

  var string = "Now it's my turn to try it out."
  console.log(string.substr(-9)); 
  // Output: "out."

  // Python Syntax
  string = "Now it's my turn to try it out."
  console.log(string[:8]); 
  // Output: "Now it's"

  string = "Now it's my turn to try it out."
  console.log(string[:-9]); 
  // Output: "out."

// Day 4
// Js Syntax
reverse() an array method

  var array = ['r', 'e', 't', 'u', 'p', 'm', 'o', 'c']
  console.log(array.reverse());
  // Output = ['c', 'o', 'm', 'p', 'u', 't', 'e', 'r']


join() changes an array to a string
  console.log(array.join());
  // Output = "r,e,t,u,p,m,o,c" 

  console.log(array.join(" ")); join with space in between
  // Output = "r e t u p m o c" 

  console.log(array.join("] ["));
  // Output = "r] [e] [t] [u] [p] [m] [o] [c"

//Challenge
  var splitString = "tnellecxe"
  console.log(splitString.split("").reverse().join(""));
  // Output = "excellent"

  var today = "today work Great"
  console.log(today.split(" ").reverse().joing(" "));
  // Output = "Great work today"
  
  
