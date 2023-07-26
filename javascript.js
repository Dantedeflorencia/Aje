// CODAI ^-^

// Define a function to add spaces between lines of text
function addSpacesBetweenLines(text) {
  // Split the input text into an array of lines
  const lines = text.split('\n');

  // Join the lines with spaces in between and return the result
  return lines.join(' ');
}

// Example usage
const inputText = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt`;

const result = addSpacesBetweenLines(inputText);
console.log(result);
