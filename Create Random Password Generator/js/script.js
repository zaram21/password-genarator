const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateNumber = document.querySelector(".generate-button");

let allCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=_+:;?/>.<,|~][{})(*&^%$#@!";

const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumber];
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("fa-circle-check","fa-copy")
}

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
})

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-copy","fa-circle-check")
})
generatePassword();
generateNumber.addEventListener("click", generatePassword);