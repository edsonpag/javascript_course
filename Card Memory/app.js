let cards_length = 6
const cards = []
let allCardsShown = 0
let selectedCards = []
let selectedCardsId = []

let maxTime = 0
let gameover = false

const localStorageVictories = JSON.parse(localStorage.getItem('victories'))
let victories = localStorage.getItem('victories') !== null ? localStorageVictories : 0

const localStorageDefeats = JSON.parse(localStorage.getItem('defeats'))
let defeats = localStorage.getItem('defeats') !== null ? localStorageDefeats : 0


const mainEl = document.querySelector('main')
const timerEl = document.querySelector('.timer')

function timer() {
    let minutes = 0, seconds = 0, ms = 0

    const time = setInterval(() => {
        ms = seconds * 1000
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

        if(ms >= maxTime) {
            clearInterval(time)
            gameover = true
            isGameOver()
        }

    }, 1000)
}

function difficulty() {
    const selectEl = document.querySelector('#difficulty')

    const selectedDifficulty = selectEl.value

    if(selectedDifficulty === 'easy') {
        maxTime = 120000
        cards_length = 6
    } else if(selectedDifficulty === 'medium') {
        maxTime = 60000
        cards_length = 8
    } else {
        cards_length = 10
        maxTime = 50000
    }
}

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

function addEventListenerToCards() {
    const randomSequenceOfNumbers = getRandomSequenceOfNumbers()
    const cardsEl = document.querySelectorAll('.card')

    cardsEl.forEach((card, index) => {
        card.addEventListener('click', async (event) => {

            if(card.firstElementChild.getAttribute('data-card-id')) return
            if(selectedCards.length === 2) return

            const selectedCard = randomSequenceOfNumbers[index]
    
            card.innerHTML = `
                <img src=${cards[selectedCard]} class="img-card" data-card-id=${selectedCard}>
            `

            const imgCard = card.firstElementChild
            imgCard.style.animation = 'flip 0.8s ease 0s 1 normal'

            selectedCards.push(card)
            selectedCardsId.push(selectedCard)
            
            if(selectedCards.length === 2) {
                await setTimeout(async () => {
                    await hiddenCards()
                }, 800)
                
            }
        })
    })
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


function hiddenCards() {
    if(selectedCardsId[0] !== selectedCardsId[1]) {
        for(i of selectedCards) {
            i.innerHTML = `<img src="./cards/facedown.jpg" class="img-card">`
        }
    } else {
        allCardsShown++
    }

    isGameOver()

    selectedCards = []
    selectedCardsId = []
}

function isGameOver() {
    if(allCardsShown === cards.length) {
        victories++
        saveTolocalStorage()
        window.alert('Você ganhou com o tempo de ' + timerEl.innerHTML)
        document.location.reload()
    }
    else if(gameover) {
        defeats++
        saveTolocalStorage()
        window.alert('Você perdeu')
        document.location.reload()
    }
}

function saveTolocalStorage() {
    localStorage.setItem('victories', victories)
    localStorage.setItem('defeats', defeats)
}

function showStats() {
    const statsBtn = document.querySelector('.stats')
    const playerStatsEl = document.querySelector('.player-stats')


    statsBtn.addEventListener('click', (event) => {
        playerStatsEl.style.transition = 'transform 1s ease'
        playerStatsEl.style.transform = 'translateX(0)'
    })
}

function closeStats() {
    const closeBtn = document.querySelector('.close-btn')
    const playerStatsEl = document.querySelector('.player-stats')

    closeBtn.addEventListener('click', (event) => {
        playerStatsEl.style.transition = 'transform 1s ease'
        playerStatsEl.style.transform = 'translateX(-100%)'
    })
}

function showVictoriesAndDefeats() {
    const victoriesEl = document.querySelector('.victories')
    const defeatsEl = document.querySelector('.defeats')

    victoriesEl.insertAdjacentHTML('beforeend', `<h2>${victories}</h2>`)
    defeatsEl.insertAdjacentHTML('beforeend', `<h2>${defeats}</h2>`)
}

function startGame() {
    const startBtn = document.querySelector('.startBtn')
    const resetBtn = document.querySelector('.resetBtn')

    startBtn.addEventListener('click', (event) => {
        startBtn.style.display = 'none'
        resetBtn.style.display = 'block'

        timer()
        difficulty()
        getCards()
        displayCards()
        addEventListenerToCards()
    })

    resetBtn.addEventListener('click', (event) => {
        document.location.reload()
    })
}

startGame()
showStats()
closeStats()
showVictoriesAndDefeats()