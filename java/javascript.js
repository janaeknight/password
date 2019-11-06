function generalFunction() {

    let password = document.getElementById("passwordInput").value;

    console.log("Testing password: " +password,);




    if (password.length>=9 &&password.length<=20) {
        console.log("The password "+password, " has " +password.length, "characters and meets minimum requirements.");
    } else if (password.length>20) {
        console.log("The password "+password, " has " +password.length, "characters. Maximum is 20 characters." );
    } else {
        console.log("The password "+password, "only has " +password.length, "characters. Minimum is 8 characters.");
    };


    if ( (password.includes("!")) || (password.includes("@")) || (password.includes("#")) || (password.includes("$")) || (password.includes("%")) || (password.includes("&")) ) { 
        console.log("The password "+password, "contains a special character.");
    } else {
        console.log("The password" +password, "is missing a special character.");
    };
 
    if (password.includes(" ")) {
        console.log("Password contains an illegal Character.");
    }

    return;

};