let cards = []

const pointsToWin = 21

function startGame() {
    initialHand()
    displayNewCardButton()
    removeStartButton()
    renderGame()
}

function randomCard() {
    const max = 11
    const min = 1

    const card = Math.floor(Math.random() * max + min)

    return card
}

function initialHand() {
    
    cards.push(randomCard(), randomCard())
}

function drawNewCard() {
    cards.push(randomCard())
    renderGame()
}

function displayNewCardButton() {
    const newCardButton = document.getElementById('newCard')

    newCardButton.style.display = "block"
}

function removeNewCardButton() {
    const newCardButton = document.getElementById('newCard')

    newCardButton.style.display = "none"
}

function displayStartButton() {
    const startGameButton = document.getElementById('startGame')

    startGameButton.style.display = "block"
}

function removeStartButton() {
    const startGameButton = document.getElementById('startGame')

    startGameButton.style.display = "none"
}

function restartGame() {
    cards = []

    displayStartButton()
}

function renderCards() {
    const cardsParagraph = document.getElementById('cards')

    cardsParagraph.textContent = "Cards: "

    cards.map((card) => {
        cardsParagraph.textContent += card
        cardsParagraph.textContent += " - "
    })

}

function cardsSum() {
    let sum = 0
    const sumParagraph = document.getElementById('sum')

    cards.map((card) => {
        sum += card
    })

    sumParagraph.textContent = "Sum: " + sum
}

function renderGame() {

    renderCards()
    cardsSum()
    const gameStatus = checkGameOver(cards)

    if(gameStatus.win) {
        removeNewCardButton()
        winMessage()
        restartGame()
    }

    else if(!gameStatus.win && gameStatus.gameover) {
        removeNewCardButton()
        lostMessage()
        restartGame()
    }

    else {
        continueMessage()
    }
}


function checkGameOver(cards) {
    let sum = 0

    cards.forEach(card => {
        sum += card
    });

    if(sum === pointsToWin) {
        return {
            win: true,
            gameover: true
        }
    } 
    else if(sum < pointsToWin) {

        return {
            win: false,
            gameover: false
        }
    }
    else {
        return {
            win: false,
            gameover: true
        }
    }

}

const message = document.getElementById('message')

function winMessage() {
    message.innerText = "Blackjack! Você venceu!"
}

function lostMessage() {
    message.innerText = "Você perdeu!"
}

function continueMessage() {
    message.innerText = "Você deseja comprar uma nova carta?"
}