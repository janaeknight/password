function generalFunction() {

    // var accEmail = document.getElementById("emailInput").value;
    // var accName = document.getElementById("nameInput").value;
    var accUsername = document.getElementById("usernameInput").value;

    var noticeUserLength = document.getElementById("notice-username");
    var noticeMinMax = document.getElementById("notice-minMax");
    var noticeUp = document.getElementById("notice-upCase");
    var noticeLo = document.getElementById("notice-loCase");
    var noticeNum = document.getElementById("notice-num");
    var noticeSpace = document.getElementById("notice-space");
    var noticeSpecial = document.getElementById("notice-special");

    
    if ( (noticeMinMax.style.display = "block") || (noticeUp.style.display = "block") || (noticeLo.style.display = "block") || (noticeNum.style.display = "block") || (noticeSpace.style.display = "block") || (noticeUserLength.style.display = "block") ) {
        noticeUserLength.style.display = "none";
        noticeMinMax.style.display = "none";
        noticeUp.style.display = "none";
        noticeLo.style.display = "none";
        noticeNum.style.display = "none";
        noticeSpace.style.display = "none";
        noticeSpecial.style.display = "none";
    }

    function checkUsername() {
        if ( (accUsername.length>=5) && (accUsername.length<=16) ) {
            console.log("The username " +accUsername, "is valid.");
            return true;
        } else {
            console.log("The username " +accUsername, "is not valid.");
            noticeUserLength.style.display = "block";
            return false;
        }
    }
    let password = document.getElementById("passwordInput").value;
    console.log("Testing password: " +password,);

    function checkLength() {
        if (password.length>=8 && password.length<=20) {
            console.log("The password "+password, "has " +password.length, "characters and meets minimum requirements.");
            return true;
        } else {
            console.log("The password "+password, "has " +password.length, "characters. Min - 8. Max - 20" );
            noticeMinMax.style.display = "block";
            return false;
        };
    };

    function checkSpecial() {
        if ( (password.includes("!")) || (password.includes("@")) || (password.includes("#")) || (password.includes("$")) || (password.includes("%")) || (password.includes("&")) ) { 
            console.log("The password "+password, "contains a special character.");
            return true;
        } else {
            console.log("The password " +password, "is missing a special character.");
            noticeSpecial.style.display = "block";
            return false;
        };
    };

    function checkUppercase() {
        if ( (password.includes("A")) || (password.includes("B")) || (password.includes("C")) || (password.includes("D")) || (password.includes("E")) || (password.includes("F")) || (password.includes("G")) || (password.includes("H")) || (password.includes("I")) || (password.includes("J")) || (password.includes("K")) || (password.includes("L")) || (password.includes("M")) || (password.includes("N")) || (password.includes("O")) || (password.includes("P")) || (password.includes("Q")) || (password.includes("R")) || (password.includes("S")) || (password.includes("T")) || (password.includes("U")) || (password.includes("V")) || (password.includes("W")) || (password.includes("X")) || (password.includes("Y")) || (password.includes("Z")) ) {
            console.log("The password " +password, "contains a capital letter.");
            return true;
        } else {
            console.log("The password " +password, "is missing a capital letter.");
            noticeUp.style.display = "block";
            return false;
        };
    };

    function checkLowercase() {
        if ( (password.includes("a")) || (password.includes("b")) || (password.includes("c")) || (password.includes("d")) || (password.includes("e")) || (password.includes("f")) || (password.includes("g")) || (password.includes("h")) || (password.includes("i")) || (password.includes("j")) || (password.includes("k")) || (password.includes("l")) || (password.includes("m")) || (password.includes("n")) || (password.includes("o")) || (password.includes("p")) || (password.includes("q")) || (password.includes("r")) || (password.includes("s")) || (password.includes("t")) || (password.includes("u")) || (password.includes("v")) || (password.includes("w")) || (password.includes("x")) || (password.includes("y")) || (password.includes("z"))) {
            console.log("The password " +password, "contains a lowercase letter.");
            return true;
        } else {
            console.log("The password " +password, "is missing a lowercase letter.");
            noticeLo.style.display = "block";
            return false;
        };
    };

    function checkNumbers() {
        if ( (password.includes("1")) || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0") ) {
            console.log("The password " +password, "contains at least one number.");
            return true;
        } else {
            console.log("The password " +password, "is missing a number.");
            noticeNum.style.display = "block";
            return false;
        };
    };

    function checkSpaces() {
        if (password.includes(" ")) {
            console.log("The password " +password, "contains an illegal Character.");
            noticeSpace.style.display = "block";
            return false;
        } else {
            return true;
        };
    };

checkUsername();
checkLength();
checkNumbers();
checkSpaces();
checkSpecial();
checkUppercase();
checkLowercase();

////////////////////////////////////////////////////////////////////////////
    
    function checkValidity() {
        if ( checkLength() && checkSpecial() && checkLowercase() &&checkUppercase() && checkNumbers() && checkSpaces() ) {
            console.log("The password " +password, "is valid.");
            window.location.replace("main.html");
        } else {
            console.log("The password " +password, "is not valid.");
            // do nothing
        };
        return;
    };
    checkValidity();


    console.log("----------------------------------------------------------")

    return;
};