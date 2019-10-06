//Access "Generate Password" button
var passwordEl = document.querySelector("#password");
//Access "Copy to Clipboard" button
var copyEl = document.querySelector("#copy");
//Access subtitle <h3> field 
var textPasswordEl = document.querySelector("#textPassword");

//When a user clicks "Generate Password" button a password is generated
passwordEl.addEventListener("click", function(event){
    event.preventDefault();
    var password = generatePassword(passwordLength, passwordType);
    textPasswordEl.textContent = password;
});

//When a user clicks "Copy to Clipboard" button the password is copied 
copyEl.addEventListener("click", function(){
    event.preventDefault();
    //textPasswordEl.select();
    //document.execCommand("copy");
    alert("Copied the text: " + textPasswordEl);
});

//Ask for password length
var passwordLength = prompt("Please enter the length of your password. Must be between 8-128 characters.");

//Create loop that won't stop until user enters valid password length
while((passwordLength < 8) || (passwordLength > 128)){
    alert("Password doesn't meet length requirement! Try again.");
    passwordLength = prompt("Enter a value from 8-128.");
}

//Instructions to user as to how to choose character types 
var passwordType = prompt("Now please enter what type you want your password to consist of. Enter the #1 for special, #2 for numeric, #3 for lowercase or #4 for uppercase characters. You can also enter a combination of any types");

/*Create loop that won't stop until user enters valid password type
/The codes are as follows:
 1 = special, 2 = numeric, 3 = lowercase, 4 = uppercase
 12 = special and numeric, 13 = special and lowercase, 14 = special and uppercase 
 23 = numeric and lowercase, 24 = numeric and uppercase, 34 = lowercase and uppercase
 123 = special, numeric and lowercase, 124 = special, numeric and uppercase
 134 = special, lowercase and uppercase, 234 = numeric, lowercase and uppercase
 1234 = all*/
while((passwordType !== "1" ) && (passwordType !== "2") && (passwordType !== "3") && (passwordType != "4") 
    && (passwordType !== "12") && (passwordType !== "13") && (passwordType !== "14") && (passwordType !== "23")
    && (passwordType !== "24") && (passwordType !== "34") && (passwordType !== "123") && (passwordType !== "124")
    && (passwordType !== "134") && (passwordType !== "234") && (passwordType !== "1234")){
        
    alert("Not a valid password type! Try again.");
    passwordType = prompt("Enter a value of either # 1, 2, 3, 4 or a combination of these.");
}

//Function to generate random password based on length and type
function generatePassword(length, type){

    //Create 4 arrays that contain the definitions for the special, numeric, lowercase and uppercase characters
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
    //Create array consisting of special and numeric characters
    var specialNumeric = specialChar.concat(numericChar);
    //Create array consiting of special and lowercase characters
    var specialLower = specialChar.concat(lowerCaseChar);
    //Create array consisting of special and uppercase characters
    var specialUpper = specialChar.concat(upperCaseChar);
    //Create array consisting of numeric and lowercase characters
    var numericLower = numericChar.concat(lowerCaseChar);
    //Create array consisting of numeric and uppercase characters
    var numericUpper = numericChar.concat(upperCaseChar);
    //Create array consisting of lowercase and uppercase characters
    var lowerUpper = lowerCaseChar.concat(upperCaseChar);

    //Create array consisting of special, numeric and lowercase characters
    var specialNumLow = specialNumeric.concat(lowerCaseChar);
    //Create array consisting of special, numeric and uppercase characters
    var specialNumUp = specialNumeric.concat(upperCaseChar);
    //Create array consisting of special, lowercase and uppercase characters
    var specialLowUp = specialChar.concat(lowerUpper);
    //Create array consisting of numeric, lowercase and uppercase characters
    var numLowUp = numericChar.concat(lowerUpper);
        
    //Create array consisting of all the character types
    var allChar = specialNumeric.concat(lowerUpper);

    //Start password string with a blank string
    var password = "";
    //This variable will access a character in the arrays randomly
    var randomIndex;

    //Create a loop that won't stop until it finds "length" random characters
    for(var i = 0; i < length; i++){
        //Enter #1 for just special characters
        if(type === "1"){
            randomIndex = Math.floor(Math.random() * specialChar.length); 
            password = password + specialChar[randomIndex];
        }
        //Enter #2 for just numeric characters
        else if(type === "2"){
            randomIndex = Math.floor(Math.random() * numericChar.length);
            password = password + numericChar[randomIndex];
        }
        //Enter #3 for just lowercase characters
        else if(type === "3"){
            randomIndex = Math.floor(Math.random() * lowerCaseChar.length);
            password = password + lowerCaseChar[randomIndex];
        }
        //Enter #4 for just uppercase characters
        else if(type === "4"){
            randomIndex = Math.floor(Math.random() * upperCaseChar.length);
            password = password + upperCaseChar[randomIndex];
        }
        //Enter #12 for only special and numeric characters
        else if(type === "12" ){
            randomIndex = Math.floor(Math.random() * specialNumeric.length);
            password = password + specialNumeric[randomIndex];
        }
        //Enter #13 for only special and lowercase characters
        else if(type === "13" ){
            randomIndex = Math.floor(Math.random() * specialLower.length);
            password = password + specialLower[randomIndex];
        }
        //Enter #14 for only special and uppercase characters
        else if(type === "14" ){
            randomIndex = Math.floor(Math.random() * specialUpper.length);
            password = password + specialUpper[randomIndex];
        }
        //Enter #23 for only numeric and lowercase characters
        else if(type === "23" ){
            randomIndex = Math.floor(Math.random() * numericLower.length);
            password = password + numericLower[randomIndex];
        }
        //Enter #24 for only numeric and uppercase characters
        else if(type === "24" ){
        randomIndex = Math.floor(Math.random() * numericUpper.length);
        password = password + numericUpper[randomIndex];
        }
        //Enter #34 for only lowercase and uppercase characters
        else if(type === "34" ){
            randomIndex = Math.floor(Math.random() * lowerUpper.length);
            password = password + lowerUpper[randomIndex];
        }
        //Enter #123 for only special, numeric and lowercase characters
        else if(type === "123"){
            randomIndex = Math.floor(Math.random() * specialNumLow.length);
            password = password + specialNumLow[randomIndex];
        }
        //Enter #124 for only special, numeric and uppercase characters
        else if(type === "124"){
            randomIndex = Math.floor(Math.random() * specialNumUp.length);
            password = password + specialNumUp[randomIndex];
        }
        //Enter #134 for only special, lowercase and uppercase characters
        else if(type === "134"){
            randomIndex = Math.floor(Math.random() * specialLowUp.length);
            password = password + specialLowUp[randomIndex];
        }
        //Enter #234 for only numeric, lowercase and uppercase characters
        else if(type === "234"){
            randomIndex = Math.floor(Math.random() * numLowUp.length);
            password = password + numLowUp[randomIndex];
        }
        //Enter #1234 for all type of characters
        else if(passwordType === "1234" ){
            randomIndex = Math.floor(Math.random() * allChar.length);
            password = password + allChar[randomIndex];
        }
    }

//Output password
return password;
}


    
        