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

        displayWeatherData(WeatherText, WeatherIcon, HasPrecipitation, IsDayTime, Temperature)
    }
    catch(err) {
        console.log(err)
    }
}

async function displayWeatherData(WeatherText, WeatherIcon, HasPrecipitation, IsDayTime, Temperature) {
    const weatherCard = document.getElementById("weatherCard")

}