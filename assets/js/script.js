var generateBtn = document.querySelector("#generate");

//Input Variables Global
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}[]"
var randPassword = ""

//Used for "Generate Password" button
generateBtn.addEventListener("click", writePassword);

