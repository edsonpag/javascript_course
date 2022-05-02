const optionsBtn = document.querySelector(".options-btn");
const optionsMenuEl = document.querySelector(".options-menu");

const createdPasswordEl = document.querySelector(".created-password");
const passwordGeneratorEl = document.querySelector(".password-generator");
const copyPasswordEl = document.querySelector(".password-generator");

const passwordLengthEl = document.querySelector("#password-length");
const passwordLengthLabel = document.querySelector("#password-length-label");

const uppercaseLettersEl = document.querySelector("#uppercase-letters");
const lowercaseLettersEl = document.querySelector("#lowercase-letters");
const numberEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");


optionsBtn.addEventListener("click", (event) => {
    optionsMenuEl.classList.toggle("show-options-menu");
})

passwordLengthEl.addEventListener("change", (event) => {
    passwordLengthLabel.innerText = passwordLengthEl.value;
})

passwordGeneratorEl.addEventListener("click", (event) => {
    let password = "";
    const passwordLength = parseInt(passwordLengthEl.value);
    const uppercase = uppercaseLettersEl.checked;
    const lowercase = lowercaseLettersEl.checked;
    const numbers = numberEl.checked;
    const symbols = symbolsEl.checked;
    let controller = [];

    if(uppercase) controller.push("uppercase");
    if(lowercase) controller.push("lowercase");
    if(numbers) controller.push("numbers");
    if(symbols) controller.push("symbols")

})
