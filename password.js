/* 
1) create a password checker
2) it needs to meet certain criteria:
- needs to check for atleast 8 characters
- needs to include the character "#"
3) If the password doesn't meet any or both criteria, 
the checker needs to print corresponding error messages.
*/
var password = "taranveer#";
var passwordLength = password.length >= 8;
var passwordHash = password.includes("#");

if (passwordLength === true && passwordHash === true) {;
  console.log(`Got it. Your password is:${password}`);
} else if (passwordLength === true && passwordHash === false) {;
    console.log("Your password must include a #");
} else if (passwordLength === false && passwordHash === true) {;
    console.log("Your password is too short");
} else {;
    console.log("Your password must include a #. Your password is too short");
};
