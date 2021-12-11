// This script will run when the page is loaded
let result = countWords();
console.log(result);


function countWords() {
// The text variable contains the long string of words
let text =
  "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

// TODO: add code here to remove the periods and commas and transform all words to lowercase letters
//I lazy
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");
 text = text.replace(".", "");

 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");
 text = text.replace(",", "");


//S, B, A, T, U
text = text.replace("S", "s");
text = text.replace("B", "b");
text = text.replace("B", "b");
text = text.replace("A", "a");
text = text.replace("T", "t");
text = text.replace("T", "t");
text = text.replace("T", "t");
text = text.replace("U", "u");


// The wordArray array will contains a key value pair for words and their occurences in the text
const wordArray = text.split(" ");
// This loop goes through the wordArray and creates the key value pair objects
const wordCount = {};
wordArray.forEach((item) => {
  if (wordCount[item] == null) wordCount[item] = 1;
  else {
    wordCount[item] += 1;
  }
});

// Turn objects into an array of arrays
let myArray = Object.entries(wordCount);

console.log(myArray);
// TODO: sort the arrays based on the count number and store the result in a variable called bArray
let bArray = ["", "", ""];
let CArray = [0, 0, 0];

myArray.forEach((item) => {
    if (item[1] > CArray[0]) {

      CArray[2] = CArray[1];
      CArray[1] = CArray[0];
      CArray[0] = item[1];

      bArray[2] = bArray[1];
      bArray[1] = bArray[0];
      bArray[0] = item;



    } else if (item[1] > CArray[1]) {

      CArray[2] = CArray[1];
      CArray[1] = item[1];

      bArray[2] = bArray[1];
      bArray[1] = item;




    } else if (item[1] > CArray[2]) {

      CArray[2] = item[1];

      bArray[2] = item;



    }


  });



// return the first three most common words.
return bArray;
}

//don't change this line
if (typeof module !== "undefined") {
module.exports = countWords;
}

