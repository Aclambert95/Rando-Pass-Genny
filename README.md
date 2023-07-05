# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Order of Operations

#### The first thing you need to do once you have your base functions down is generate the different variables:
```
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}[]"
var randPassword = ""
```

#### The next thing you will need to do is to create the function to tell the generate password button to write a password in the text area:
```
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
```

#### Now that we have our functions written, you will want to write a function to generate your first prompt:
```
function generatePassword() {
    var passLength = prompt("How many characters would you like your password to be?")
}
```
![Alt text](image.png)

#### The next step is to define the minimum and maximum lengths of the password. We can do this with the following "IF" statement:
```
if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Ah ah ah - You must enter a number between 8 and 128");
    return
  }
```
![Alt text](image-2.png)

#### After that we want to request each of the different kinds of characters:
  ```
  var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowercases.length; i++) {
      inputs.push(lowercases[i]);
    }
    console.log(inputs)
  }
  ```
  ![Alt text](image-3.png)
  ```
  var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < uppercases.length; i++) {
      inputs.push(uppercases[i]);
    }
    console.log(inputs)
  }
  ```
  ![Alt text](image-4.png)
  ```
  var numberConfirm = confirm("Would you like to include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numbers.length; i++) {
      inputs.push(numbers[i]);
    }
    console.log(inputs)
  }
  ```
  ![Alt text](image-5.png)
  ```
  var specialsConfirm = confirm("Would you like to include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < specials.length; i++) {
      inputs.push(specials[i]);
    }
    console.log(inputs)
  }
  ```
  ![Alt text](image-6.png)

#### In the oh so rare case that the user decides they do not like any of the options, we need to prompt them with a message telling them for this generator to work, they will need to select AT LEAST 1 type of character:
```
if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
        alert("Password requires at least 1 type of character.")
        return;
    }
```
![Alt text](image-7.png)

#### Before we input the equation for the randomizer, we need to convert the password length to integers:
```
const confirmLength = parseInt(passLength)
```

#### The final touch is to input the actual equation that allows the functions to pulls all of the chosen variables into the array whose length was defined in the first prompt, returning randomized values using math input by the length of the input array, and returns the password to text area box:
```
for (var i = 0; i < confirmLength; i++) {
        inputs[
          Math.floor(Math.random() * inputs.length)];
    
        randPassword += inputs[
          Math.floor(Math.random() * inputs.length)];
      }
      return randPassword;
```
![Alt text](image-8.png)
