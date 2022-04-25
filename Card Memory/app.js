const cards_length = 6
const cards = []

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

cardsEl.forEach((card, index) => {
    card.addEventListener('click', async (event) => {
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

function hiddenCards() {
    if(selectedCardsId[0] !== selectedCardsId[1]) {
        for(i of selectedCards) {
            i.innerHTML = `<img src="./cards/facedown.jpg" class="img-card">`
        }
    }

    selectedCards = []
    selectedCardsId = []
}