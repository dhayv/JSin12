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
