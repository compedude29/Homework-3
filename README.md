# Generating a Random Password

This application generates a random password based on what a user inputs for the password length and type.

* Length = 8 to 128 characters

* Types  = special, numeric, lowercase and uppercase characters or a combination of these

## Type Codes Enteres by Users

* 1 = special
* 2 = numeric
* 3 = lowercase
* 4 = uppercase
* 12 = special and numeric
* 13 = special and lowercase
* 14 = special and uppercase
* 23 = numeric and lowercase
* 24 = numeric and uppercase
* 34 = lowercase and uppercase
* 123 = special, numeric and lowercase
* 124 = special, numeric and uppercase
* 134 = special, lowercase and uppercase
* 234 = numeric, lowercase and uppercase
* 1234 = all types 

### Methodology
* Uses "prompt" to let user input the password length and type

* Uses "alert" to notifiy user when they input an incorrect password length or type

* Uses ".addEventListener" to wait for the user to click on the "Generate Password" button

* Generates the password by calling the "generatePassword(length, type)" function in the ".addEventListener"

* Displays password by using "h3" element

* The "Copy to Clipboard" button isn't working 





