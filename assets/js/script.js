var generateBtn = document.querySelector("#generate");
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}[]"
var randPassword = ""

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passLength = prompt("How many characters would you like your password to be?")
}

