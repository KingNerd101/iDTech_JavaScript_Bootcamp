// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE


// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE


// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE


// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE

var words = ["This ", "is ", "JavaScript ", "Bootcamp!"];
var sentance = "";

console.log(createSentence(words));

function createSentence(Words) {
    var sentanceInstance = "";
    for (let x = 0; x < Words.length; x++) {
        sentanceInstance += Words[x];
    }

    return sentanceInstance;
}