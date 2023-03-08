/* form elements */
var first = document.getElementById('first');
var last = document.getElementById('last');
var username = document.getElementById('username');
var username = document.getElementById('password');
var submitbtn = document.getElementById('submit-btn');


/* validation elements */


var symboles  = ['!', '@', '#', '$', '%', '&', '*'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function formvalidation() {
    if (username.value < 8) {
        alert("Username must be at least 8 characters long");
        username.focus();
        return false;
    }

    
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        password.focus();
        return false;
    }

    if ({symboles}.includes(password.value)) {
        alert("Password must contain at least one symbol");
        password.focus();
        return false;
    }
    if ({uppercase}.includes(password.value)) {
        alert("Password must contain at least one uppercase letter");
        password.focus();
        return false;
    }

    if ({numbers}.includes(password.value)) {
        alert("Password must contain at least one number");

        password.focus();
        return false;

    }
    
    alert("Form Submitted Successfully!");
    return true;
}
