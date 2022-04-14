const startBtn = document.getElementById('start-button')

const eventNameInput = document.getElementById('event-name-input')
const eventDateInput = document.getElementById('event-date-input')
const eventTimeInput = document.getElementById('event-time-input')

const mainElement = document.querySelector('main')


let days = 0, daysms = 0, hours = 0, hoursms = 0, minutes = 0, minutesms = 0, seconds = 0, ms = 0



startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(eventNameInput.value === "") {
        alert('Digite o nome do evento')
        return
    }

    if(eventDateInput.value === "") {
        alert('Coloque a data correta')
        return
    }

    if(Date.now() > calculateEndDate()) {
        alert('Você deve preencher uma data apartir de hoje')
        return
    }

    mainElement.style.display = "flex"

    createEvent()
    update()

})


function createEvent() {
    const countdownTimerElement = document.createElement('div')
    countdownTimerElement.className = 'countdown-timer'
    mainElement.insertAdjacentElement('beforeend', countdownTimerElement)

    const countdownTimerHeaderElement = document.createElement('div')
    countdownTimerHeaderElement.className = 'countdown-header'
    countdownTimerElement.insertAdjacentElement('afterbegin', countdownTimerHeaderElement)

    const countdownTimerTitleElement = document.createElement('h1')
    countdownTimerTitleElement.id = 'event-name'
    countdownTimerHeaderElement.insertAdjacentElement('afterbegin', countdownTimerTitleElement)
    countdownTimerTitleElement.innerText = eventNameInput.value
    
    const countdownTimerBodyElement = document.createElement('div')
    countdownTimerBodyElement.className = 'countdown-body'
    countdownTimerElement.insertAdjacentElement('beforeend', countdownTimerBodyElement)

    const countdownDays = document.createElement('p')
    countdownDays.id = 'days'
    countdownTimerBodyElement.insertAdjacentElement('beforeend', countdownDays)

    const countdownHours = document.createElement('p')
    countdownHours.id = 'hours'
    countdownTimerBodyElement.insertAdjacentElement('beforeend', countdownHours)

    const countdownMinutes = document.createElement('p')
    countdownMinutes.id = 'minutes'
    countdownTimerBodyElement.insertAdjacentElement('beforeend', countdownMinutes)

    const countdownSeconds = document.createElement('p')
    countdownSeconds.id = 'seconds'
    countdownTimerBodyElement.insertAdjacentElement('beforeend', countdownSeconds)
}

function calculateEndDate() {
    const date = eventDateInput.value.split('-')
    const time = eventTimeInput.value.split(':')

    const endDate = new Date()

    endDate.setFullYear(date[0])
    endDate.setMonth(date[1] - 1)
    endDate.setDate(date[2])
    endDate.setHours(time[0])
    endDate.setMinutes(time[1])
    endDate.setSeconds(0)

    return endDate
}

function calculateTheDifferenceBetweenDates(endDate) {
    const startDate = new Date()

    const diff = Math.abs(endDate - startDate)

    return diff
}

function update() {
    const daysElement = document.getElementById('days')
    const hoursElement = document.getElementById('hours')
    const minutesElement = document.getElementById('minutes')
    const secondsElement = document.getElementById('seconds')

    const endDate = calculateEndDate()

    const updateInterval = setInterval(() => {
        ms = calculateTheDifferenceBetweenDates(endDate)    

        days = Math.floor(ms / (24*60*60*1000))
        daysms = ms % (24*60*60*1000)

        hours = Math.floor(daysms / (60*60*1000))
        hoursms = ms % (60*60*1000)

        minutes = Math.floor(hoursms / (60*1000))
        minutesms = ms % (60*1000)

        seconds = Math.floor(minutesms / 1000)


        daysElement.innerText = days + "D"
        hoursElement.innerText = hours + "H"
        minutesElement.innerText = minutes + "M"
        secondsElement.innerText = seconds + "S"

        if(ms < 100) {
            alert(`Chegou a hora do seu event: ${eventNameInput.value}`)
            clearInterval(updateInterval)
        }

    }, 1000)
    
}