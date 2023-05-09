function checkPasswordMatch() {
    var password = document.getElementById("user_pwd").value;
    var confirmPassword = document.getElementById("confirm").value;

    if (password != confirmPassword) {
        document.getElementById("passwordMatch").innerHTML = "Passwords do not match!";
        document.getElementById("submitBtn").disabled = true;
    } else {
        document.getElementById("passwordMatch").innerHTML = "";
        document.getElementById("submitBtn").disabled = false;
    }
}
