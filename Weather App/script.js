const key = "zL7VK2HGE4KUAoAEX7Ggfz44OhOy07p9"
const apiSearch = "http://dataservice.accuweather.com/locations/v1/cities/search"
const apiCurrentConditions = "http://dataservice.accuweather.com/currentconditions/v1/"
const cityName = document.getElementById('cityName')


async function getCityKey() {
    try {
        const { data } = await axios.get(`${apiSearch}?apikey=${key}&q=${cityName.value}`)

        const city = data.filter((c) => {
            if(c.Country.ID === "BR") {
                return c
            }
        })

        const cityKey = city[0].Key

        return cityKey
    }
    catch(err) {
        console.log(err)
    }
}


async function getData() {
    try {
        const cityKey = await getCityKey()
        const { data } = await axios.get(`${apiCurrentConditions}${cityKey}?apikey=${key}`)

        const { WeatherText, WeatherIcon, HasPrecipitation, IsDayTime, Temperature } = data[0]

        console.log(data[0])
        displayWeatherData(WeatherText, WeatherIcon, HasPrecipitation, IsDayTime, Temperature)
    }
    catch(err) {
        console.log(err)
    }
}

async function displayWeatherData(WeatherText, WeatherIcon, HasPrecipitation, IsDayTime, Temperature) {
    const weatherCard = document.getElementById("weatherCard")
    const weatherTextElement = document.getElementById("weatherText")
    const weatherIconElement = document.getElementById("weatherIcon")
    const locationNameElement = document.getElementById("locationName")
    const temperatureElement = document.getElementById("temperature")
    const precipitationElement = document.getElementById("precipitation")


    weatherCard.style.display = "flex"
    weatherTextElement.textContent = WeatherText
    weatherIconElement.src = `weather-icons/${WeatherIcon}.png`
    locationNameElement.textContent = cityName.value
    temperatureElement.textContent = Temperature.Metric.Value + "ºC"

    if(Temperature.Metric.Value > 25) {
        temperatureElement.style.color = "orange"
    } else if (Temperature.Metric.Value > 18 && Temperature.Metric.Value <= 25) {
        temperatureElement.style.color = "yellow"
    } else {
        temperatureElement.style.color = "aqua"
    }

    if(HasPrecipitation) {
        precipitationElement.textContent = "Sim"
        precipitationElement.style.color = "aqua"
    } else {
        precipitationElement.textContent = "Não"
        precipitationElement.style.color = "goldenrod"
    }

    if(IsDayTime) {
        weatherCard.style.background = "rgb(50, 218, 50)"
    } else {
        weatherCard.style.background = "#333"
    }

}