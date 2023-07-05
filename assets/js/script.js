// Assignment Code
var generateBtn = document.querySelector("#generate");

// List the password variables
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}[]"
var randPassword = ""

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passLength = prompt("How many characters would you like your password to be?")

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Invalid entry - Please enter a number between 8 and 128");
        return
    }


}