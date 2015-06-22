// first things first: include script tag in html doc
// english : SENTENCES composed of WORDS which each have TYPE, such as noun, verb, adjective.
// javascript : STATEMENTS composed (mostly) of VALUES which each have a type, such as number, string, boolean.

// Every value has a LITERAL representation. Simplest, most straightforward way to write a value

// Number literal
// 4
// 10
// 3.141592653589723
// -10

// Values can be compared and manipulated using operators ( +, -, *, /)
// 2 + 2
// 10 * 3

//Need variables to store the result of these calculations
// var result = 10 / 3;
// alert(result); // alert lets us view a value in a pop-up box.

// result is a number, but not a LITERAL number. It refers to a number.

// String literal
// 'Hello!'
// 'A witty saying proves nothing.'
// '2'

// // Strings can also be manipulated with operators.
// var greeting = 'Hello ' + 'world';
// var eleven = '1' + '1';
// var math = '1 + 1'; // still a literal string, not math. WYSIWYG

// Strings also have properties
// alert(greeting['length']) // bracket notation is more flexible
// alert(greeting.length) // dot notation is more convenient
// alert(greeting[0]) // must use bracket notation to access numerical indexes
// alert(greeting[1])
// putting it together. How to get the last letter of the string?
// alert(greeting[greeting.length-1])

// boolean literal
// true
// false

// boolean operators
// alert(!false)
// alert(!!false)

// alert(true && true)
// alert(false && true)
// alert(true && true && true && false && true)

// alert(true || false)
// alert(false || false)
// alert(false || false || false || true || false)

// take a break here?

// Sometimes operators produce value of a different type than the inputs
// alert(10 > 1)
// alert(5 <= 5)
// alert('steve' === 'steve')
// alert('steve' !== 'jeff')

// var age = 25;
// var canDrink; // camelcase variable name
// if ( age >= 21 ) {
//     canDrink = true
// }
// alert('Will you be served? ' + canDrink) // canDrink is not a string, but we can COERCE it


// var age = 19;
// var canDrink;
// if ( age >= 21 ) {
//     canDrink = true;
// }
// else {
//     canDrink = false;
// }
// alert(canDrink)

// var age = 19;
// var country = 'Ireland';
// var canDrink;
// if ( age >= 21 ) {
//     canDrink = true; // if over 21, it doesn't matter what country we're in
// }
// else if ( age >= 18 && country === 'Ireland' ) {
//     canDrink = true;
// }
// else {
//     canDrink = false;
// }
// alert(canDrink)

// An if-else chain has 1 if, 0-infinity else if blocks, and 0 or 1 else block.

///////////////////////////////////////////////////
// Part II: Arrays and objects

// Number, string, and boolean are primitives. Also, null and undefined. 
// An array is non-primitive type. An array is an ordered list, that stores other values.

// Array literal
// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// Like strings, arrays have a length, and numerical indexes
// var tuesday = days[1];
// var lengthOfWeek = days.length

// To run logic on each element of an array, use a for loop
// for ( var i = 0; i < days.length; i++ ) {
//     alert(days[i])
// }

// for ( var i = 0; i < days.length; i++ ) {
//     if ( days[i] === 'Saturday' ) {
//         alert('Party!')
//     }
//     else if ( days[i] === 'Sunday' ) {
//         alert('Take a nap.')
//     }
//     else {
//         alert('work work work...')
//     }
// }

// for-loop syntax is powerful, can go forwards, backwards, count by 3s, etc. But 99% of for loops look like the above. 

// Object literal
// Like arrays, objects have properties (name:value pairs), but object properties are mostly custom.
// var movie = {
//     title  : 'Sharknado II',
//     genre  : 'Science Fiction',
//     rating : 8, // out of 100
// };

// access properties with bracket notation
// var title = movie['title'];

// access properties with dot notation
// var genre = movie.genre

// What if we don't know ahead of time what we want?
// var propertyName = 'rating';
// alert(movie[propertyName])

// Adding new properties to an object
// movie['year'] = 2013;
// alert(movie['year']);

// Access each property of the object
// for ( var key in movie ) {
//     console.log("The " + key + " of the movie is " + movie[key] + ".");
// }


/////////////////////////////////////
// Part III: functions

// function is a re-usable block of code; it is another non-primitive type

//assigning a function literal to a variable
// var calculateArea = function(width, height){ // function has inputs/arguments/parameters
//     return width * height; // this is how we know what the function call evaluates to.
// }

// call/invoke the function
// var result = calculateArea(3, 4);
// alert(result)

// Put anything inside of a function
// var pluralize = function(word, number){
//     if ( number === 1 ) {
//         return word;
//     }
//     else {
//         return word + 's'; // there are two return statements, but only one will ever run.
//     }
// };

// Built in functions
// alert is a built-in function.  Console.log is similar, but generally more useful. Especially more useful for viewing arrays/objects.
// Arrays and strings have properties. Some of these properties are of type function. Also known as methods.

// convert a string to an array
// var weekString = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
// var weekArray = weekString.split(' ')
// console.log(weekArray)

// convert an array to a string
// weekString = weekArray.join(', ')
// console.log(weekString)

// functions create scope
// var concat = function(word1, word2){
//     var output = word1 + ' ' + word2;
//     return output;
// }
// var sentence = concat('Write', 'code!') 
// console.log(sentence);
// console.log(output); // 'Error! output is not defined in this scope'





