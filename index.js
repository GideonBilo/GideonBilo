// First I import "yargs" so that my program can handle command line arguments
const yargs = require('yargs');

// This is my function to parse and then replace the placeholder with their name for example: #1
function parseArgu(text) {
  const myArray = ['Gideon', 'Eben', 'Merveile', 'Chené'];
  
  // Regular expression to match placeholders like #1, #2
  const placeholderRegex = /#(\d+)/g;

  let parsedText = text; 
  parsedText = parsedText.

  // Replace the placeholders with the corresponding names
  parsedText = parsedText.replace(placeholderRegex, (match, index) => {
    const choiceIndex = parseInt(index) - 1; // Adjusting to zero-based index
    return myArray[choiceIndex] || 'NoName';
  });
  
  return parsedText;
}


// This will get the array of command line arguments from yargs
const arguArray = yargs.argv._;

// Here I make the changes to check if at least one argument is provided, and if not it displays a message that you should 
if (arguArray.length === 0) {
  // Display usage message
  console.log("Error! Your file does not contain any arguments. Replace with ex: node yourfile.js <your text with placeholders>");
} else {
  // Parse the first argument using the parseArguments function
  const parsedResult = parseArgu(arguArray[0]);

  // Print the result to the console
  console.log(parsedResult);
}
