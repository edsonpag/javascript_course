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

    const password = generatePassword();

    if(!password) return;

    displayPassword(password);
})


function generatePassword() {
    let password = "";
    let passwordLength = parseInt(passwordLengthEl.value);
    let numberOfOptions = 0;

    const uppercase = document.querySelector("#uppercase-letters").checked;
    const lowercase = document.querySelector("#lowercase-letters").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;

    const controller = [];

    if(uppercase) {
        numberOfOptions++;
        controller.push("uppercase");
    }

    if(lowercase) {
        numberOfOptions++;
        controller.push("lowercase");
    }

    if(numbers) {
        numberOfOptions++;
        controller.push("numbers");
    }

    if(symbols) {
        numberOfOptions++;
        controller.push("symbols");
    }

    if(controller.length <= 0) return;

    for(let i = 0; i < passwordLength; i++) {
        let option = Math.floor(Math.random() * numberOfOptions);

        if(controller[option] === "uppercase") {
            password += String.fromCharCode(getRandomLetter());
        }
        else if(controller[option] === "lowercase") {
            password += String.fromCharCode(getRandomLetter()).toLowerCase();
        }
        else if(controller[option] === "numbers") {
            password += getRandomNumber();
        }
        else if(controller[option] === "symbols") {
            password += getRandomSymbol();
        }
    }
    
    return password;
}

function getRandomLetter() {
    const letter = Math.floor(Math.random() * 26) + 65;
    return letter;
}

function getRandomNumber() {
    const number = Math.floor(Math.random() * 10);
    return number;
}

function getRandomSymbol() {
    const symbols = ["!", "@", "#", "$", "%", "&", "*"];
    const symbolsLength = symbols.length;

    const randomNumber = Math.floor(Math.random() * symbolsLength);

    return symbols[randomNumber];
}

function displayPassword(password) {
    createdPasswordEl.innerText = password;
}