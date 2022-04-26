const cards_length = 6
const cards = []
let allCardsShown = 0

const mainEl = document.querySelector('main')

const getCards = () => {
    for(let i = 0; i < cards_length; i++) {
        cards.push(`cards/${i}.jpg`)
    }
}

function displayCards() {

    for(let i = 0; i < cards.length * 2; i++) {
        mainEl.innerHTML += `
        <div class="card">
            <img src="./cards/facedown.jpg" class="img-card">
        </div>
        `
    }
}

function getRandomSequenceOfNumbers() {
    const numbers = []
    let card = 0
    for(let i = 0; i < cards_length * 2; i++) {
        numbers.push(card)
        card++
        if(card === cards_length) {
            card = 0
        }
    }

    const randomSequenceOfNumbers = []
    
    while(numbers.length !== 0) {
        const randomNumber = Math.floor(Math.random() * numbers.length)
    
        randomSequenceOfNumbers.push(numbers[randomNumber])
        numbers.splice(randomNumber, 1)
    }

    return randomSequenceOfNumbers
}

const app = () => {
    getCards()
    displayCards()
}

app()

const randomSequenceOfNumbers = getRandomSequenceOfNumbers()
const cardsEl = document.querySelectorAll('.card')
let selectedCards = []
let selectedCardsId = []

const startBtn = document.querySelector('button')

startBtn.addEventListener('click', (event) => {
    timer()
    cardsEl.forEach((card, index) => {
        card.addEventListener('click', async (event) => {

            if(card.firstElementChild.getAttribute('data-card-id')) return

            const selectedCard = randomSequenceOfNumbers[index]
    
            card.innerHTML = `
                <img src=${cards[selectedCard]} class="img-card" data-card-id=${selectedCard}>
            `
    
            selectedCards.push(card)
            selectedCardsId.push(selectedCard)
            
            if(selectedCards.length === 2) {
                await setTimeout(async () => {
                    await hiddenCards()
                }, 50)
                
            }
        })
    })
})

function hiddenCards() {
    if(selectedCardsId[0] !== selectedCardsId[1]) {
        for(i of selectedCards) {
            i.innerHTML = `<img src="./cards/facedown.jpg" class="img-card">`
        }
    } else {
        allCardsShown++
        console.log(allCardsShown)
    }

    if(isGameOver()) {
        window.alert('Você ganhou com o tempo de ' + timerEl.innerHTML)
    }

    selectedCards = []
    selectedCardsId = []
}

const timerEl = document.querySelector('.timer')

function timer() {
    let minutes = 0, seconds = 0

    const time = setInterval(() => {
        seconds++

        if(seconds < 10) {
            timerEl.innerHTML = `0${minutes}:0${seconds}`
        } else {
            timerEl.innerHTML = `0${minutes}:${seconds}`
        }
        
        if(seconds === 60) {
            minutes++
            seconds = 0
        }

    }, 1000)
}


function isGameOver() {
    if(allCardsShown === cards.length) {
        return true
    }
    else {
        return false
    }
}

// clicando em ok o jogador inicia um novo game
// Adicionar niveis de dificuldade (facil, medio e hard). Quanto maior a dificuldade, menos tempo ele tem para completar e aumentar o número de cards
// O usuario pode ver as estaticas do jogo: número de vezes que ganhou/perdeu e o melhor tempo para cada nivel, armazenar no localStorage caso o usuario recarregue a pagina