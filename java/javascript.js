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

    if ( (password.includes("A")) || (password.includes("B")) || (password.includes("C")) || (password.includes("D")) || (password.includes("E")) || (password.includes("F")) || (password.includes("G")) || (password.includes("H")) || (password.includes("I")) || (password.includes("J")) || (password.includes("K")) || (password.includes("L")) || (password.includes("M")) || (password.includes("N")) || (password.includes("O")) || (password.includes("P")) || (password.includes("Q")) || (password.includes("R")) || (password.includes("S")) || (password.includes("T")) || (password.includes("U")) || (password.includes("V")) || (password.includes("W")) || (password.includes("X")) || (password.includes("Y")) || (password.includes("Z")) ) {
        console.log("The password " +password, "contains a capital letter.");
    } else {
        console.log("The password " +password, "is missing a capital letter.");
    };

    if ( (password.includes("a")) || (password.includes("b")) || (password.includes("c")) || (password.includes("d")) || (password.includes("e")) || (password.includes("f")) || (password.includes("g")) || (password.includes("h")) || (password.includes("i")) || (password.includes("j")) || (password.includes("k")) || (password.includes("l")) || (password.includes("m")) || (password.includes("n")) || (password.includes("o")) || (password.includes("p")) || (password.includes("q")) || (password.includes("r")) || (password.includes("s")) || (password.includes("t")) || (password.includes("u")) || (password.includes("v")) || (password.includes("w")) || (password.includes("x")) || (password.includes("y")) || (password.includes("z"))) {
        console.log("The password " +password, "contains a lowercase letter.");
    } else {
        console.log("The password " +password, "is missing a lowercase letter.");
    };

    function checkNumbers() {
        if ( (password.includes("1")) || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0") ) {
            console.log("The password " +password, "contains at least one number.");
            return true;
        } else {
            console.log("The password " +password, "is missing a number.");
            return false;
        };
    };

    function checkSpaces() {
        if (password.includes(" ")) {
            console.log("The password " +password, "contains an illegal Character.");
            return true;
        }
    };


////////////////////////////////////////////////////////////////////////////
    




    return;
};