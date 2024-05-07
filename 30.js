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
slice(start,end)

  var array = ['fire', 'water', 'ice', 'steam', 'sand', 'grass']
  console.log(array.slice(0,4)); 
  // Output: [ 'fire', 'water', 'ice', 'steam' ]

  console.log(array.slice(-5,-2));
  // Output: [ 'water', 'ice', 'steam' ]

// JS syntax
list[start:end:step] 

  array = ['fire', 'water', 'ice', 'steam', 'sand', 'grass']
  print(array[0:4])
  // Output: [ 'fire', 'water', 'ice', 'steam' ]

  print(array[-5:-2])
  // Output: ['water', 'ice', 'steam' ]
