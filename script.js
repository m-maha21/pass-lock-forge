// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// ask the user for the length of characters

// create an if statement to check if the user is using less than 8 characters or more than 128

// ask the user if they want to use uppercase

// ask the user if they want to use lowercase

// ask the user if they want to use numbers

// ask the user if they want to use special characters

// validate at least one of the chosen options

// return an object that will store the users response


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
// run get password options

var passwordOptions = getPasswordOptions()

// password options should return an object with the following keys: passwordLength, uppercaseChoice, lowercaeChoice, numberChoice, specialChoice

console.log(passwordOptions);

return 'hello'
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return "";
  }

  var possibleChars = [];
  var guaranteedChars = [];

  if (options.includeLowercase) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guaranteedChars.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeUppercase) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guaranteedChars.push(getRandom(upperCasedCharacters));
  }

  if (options.includeNumeric) {
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(getRandom(numericCharacters));
  }

  if (options.includeSpecial) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChars.push(getRandom(specialCharacters));
  }

  // Fill the rest of the password with random characters
  for (var i = guaranteedChars.length; i < options.length; i++) {
    var randomChar = getRandom(possibleChars);
    guaranteedChars.push(randomChar);
  }

  // Shuffle the guaranteed characters to ensure they appear in random order
  guaranteedChars = guaranteedChars.sort(() => Math.random() - 0.5);

  return guaranteedChars.join("");
}
