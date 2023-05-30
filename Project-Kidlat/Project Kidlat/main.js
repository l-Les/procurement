function logIn() {
    let userName = document.getElementById("Username").value;
    let passWord = document.getElementById("Password").value;

    console.log(userName);
    console.log(passWord);
    document.getElementById("Username").value = '';
    document.getElementById("Password").value = '';
}