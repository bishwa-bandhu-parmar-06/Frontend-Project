check.onclick = togglePassword;

function togglePassword() {
    if (check.checked) pass.type = "text";
    else pass.type = "password";
}
check1.onclick = genderspecification;

function genderspecification() {
    if (check1.checked) 
    document.write("you are male");
}
check2.onclick = genderspecification1;

function genderspecification1() {
    if (check2.checked) 
    document.write("you are female");
}
check3.onclick = genderspecification2;

function genderspecification2() {
    if (check3.checked) 
    document.write("your gender is not specified");
}