export class Weather {
    constructor() {
        this.apiKey = 'cc12c5b435d66d200bd213f429d2c571'
        this.url = `https://api.openweathermap.org/data/2.5/`
        this.localization = document.querySelector('.weather-today__localization-city')
        this.temperature = document.querySelector('.weather-temperature__number')
        this.sunCycleTime = document.querySelectorAll('.weather-today__cycle-time')
        this.date = document.querySelector('.weather-today__date-name')

        this.setDate()
    }

    findLocalization(localization) {
        return fetch(`${this.url}weather?q=${localization}&appid=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {
                this.localization.textContent = `${data.name},`
                this.setTemperature(data.main.temp)
                this.setCycleSun([data.sys.sunrise, data.sys.sunset])
            })
    }

    setTemperature(temp) {
        let realTemperature = temp / 10
        this.temperature.textContent = realTemperature.toFixed(0)
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

    setDate() {
        let now = new Date();
        this.date.textContent = `Today ${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`
    }

}