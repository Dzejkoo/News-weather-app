//* export class to another file
export class Weather {
    constructor() {

        //Api parametrs
        this.apiKey = 'cc12c5b435d66d200bd213f429d2c571'
        this.apiKeyForecast = 'eb8b64ff4d674b8cad7b5ac954bd6e6e'
        this.url = `https://api.openweathermap.org/data/2.5/`
        this.urlForecast = 'https://api.weatherbit.io/v2.0/'

        //DOM element
        this.localizationCity = document.querySelector('.weather-today__localization-city')
        this.localizationCountry = document.querySelector('.weather-today__localization-country')
        this.temperature = document.querySelector('.weather-temperature__number-celsjusz')
        this.sunCycleTime = document.querySelectorAll('.weather-today__cycle-time')
        this.date = document.querySelector('.weather-today__date-name')
        this.tempIcon = document.querySelector('.weather-temperature__icon')
        this.humidity = document.querySelector('.weather-temperature__property-humidity--bold')
        this.wind = document.querySelector('.weather-temperature__property-wind--bold')
        this.pressure = document.querySelector('.weather-temperature__property-pressure--bold')
        this.daysName = document.querySelectorAll('.weather-week__tittle');
        this.daysIcon = document.querySelectorAll('.weather-week__icon');
        this.daysHighTemp = document.querySelectorAll('.weather-week__higher')
        this.daysLowTemp = document.querySelectorAll('.weather-week__lower')
        this.inputMap = document.querySelector('.weather-map__input');

        //object elements 
        this.setParametersForTodayTemperature();

    }

    //*Get data from API, and set thoose 
    setParametersForTodayTemperature(coordinates) {

        let lat = coordinates === undefined ? 52.409538 : coordinates.lat;
        let lng = coordinates === undefined ? 16.931992 : coordinates.lng;

        fetch(`${this.url}weather?lat=${lat}&lon=${lng}&units=metric&appid=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {

                //* Destructuration element from API
                const { name, main: { temp, humidity, pressure }, wind: { speed }, sys: { country, sunset, sunrise } } = data;

                //Use city name and country 
                this.setCityAndCountry(name, country)

                this.setTemperature(temp)
                this.setCycleSun([sunrise, sunset])
                this.setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

                //Set rest properties
                this.setProperties(humidity, speed, pressure)
            })
        this.setParametersForecast(lat, lng);
    }

    setCityAndCountry(city, country) {
        this.localizationCity.innerHTML = `${city}, `
        this.localizationCountry.innerHTML = `${country}`
    }

    setParametersForecast(lat, lng) {
        fetch(`${this.urlForecast}forecast/daily?lat=${lat}&lon=${lng}&key=${this.apiKeyForecast}&days=6`)
            .then(resp => resp.json())
            .then(data => this.setDateByApi(data.data))
    }

    setDateByApi(data) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        //cut two days
        const dataRestDays = data.splice(1, 5);

        //Set date for each day a week into forecast weather
        for (let i = 0; i < this.daysName.length; i++) {
            let time = new Date(dataRestDays[i].valid_date);
            let src = `https://www.weatherbit.io/static/img/icons/${dataRestDays[i].weather.icon}.png`

            this.daysName[i].textContent = days[time.getDay()]
            this.daysIcon[i].setAttribute('src', src)

            this.daysHighTemp[i].textContent = `${dataRestDays[i].max_temp.toFixed(0)}°`
            this.daysLowTemp[i].textContent = `${dataRestDays[i].min_temp.toFixed(0)}°`
        }
        this.setCurrentTime()
    }

    setTemperature(temp) {
        this.temperature.innerHTML = temp.toFixed(0)
    }

    setCycleSun(cycleSun) {
        for (let i = 0; i < cycleSun.length; i++) {
            let time = new Date(cycleSun[i] * 1000);
            let timeSunrise = time.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            });
            this.sunCycleTime[i].textContent = timeSunrise;
        }
    }

    setCurrentTime() {
        let month = ['January', 'Febuary', 'March', 'Aprlil', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let time = new Date();
        this.date.textContent = `Today ${time.getDate()} ${month[time.getMonth()]} `
    }

    setIcon(icon) {
        this.tempIcon.setAttribute('src', icon)
    }

    setProperties(humidity, wind, pressure) {
        this.humidity.textContent = `${humidity} %`;
        this.wind.textContent = `${wind} km/h`
        this.pressure.textContent = `${pressure} hPa`
    }
}