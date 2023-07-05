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
        alert("Ah ah ah - You must enter a number between 8 and 128");
        return
    }

    var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    if (lowercaseConfirm === true) {
        for (var i = 0; i < lowercases.length; i++) {
            inputs.push(lowercases[i]);
        }
        console.log(inputs)
    }

    var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    if (uppercaseConfirm === true) {
        for (var i = 0; i < uppercases.length; i++) {
            inputs.push(uppercases[i]);
        }
        console.log(inputs)
    }

    var numberConfirm = confirm("Would you like to include numbers?");
    if (numberConfirm === true) {
        for (var i = 0; i < numbers.length; i++) {
            inputs.push(numbers[i]);
        }
        console.log(inputs)
    }

    var specialsConfirm = confirm("Would you like to include special characters?");
    if (specialsConfirm === true) {
        for (var i = 0; i < specials.length; i++) {
            inputs.push(specials[i]);
        }
        console.log(inputs)
    }

}