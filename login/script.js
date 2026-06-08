let userName = document.getElementById("username");
let passWord = document.getElementById("password");

let usern = "Gab";
let pass = "28";

function checking(event) {
    event.preventDefault(); // ⬅ cegah reload form

    if (userName.value === "" && passWord.value === "") {
        alert("Masukkan Username & Password");
    } else if (userName.value === usern && passWord.value === pass) {
        alert("Akses diterima");
        window.location.href = "../home-page/homePage.html"; // ⬅ pindah halaman
    } else if (userName.value !== usern && passWord.value === pass) {
        alert("Username Salah");
    } else if (userName.value === usern && passWord.value !== pass) {
        alert("Password Salah");
    } else {
        alert("Username dan Password salah");
    }
}   
