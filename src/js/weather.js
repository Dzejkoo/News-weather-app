export class Weather {
    constructor() {
        this.apiKey = 'cc12c5b435d66d200bd213f429d2c571'
        this.url = `https://api.openweathermap.org/data/2.5/`
        this.localization = document.querySelector('.weather-today__localization-city')
        this.temperature = document.querySelector('.weather__temperature')
    }

    findLocalization(localization) {
        return fetch(`${this.url}weather?q=${localization}&appid=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {
                this.localization.textContent = `${data.name}, `
                // this.localization.textContent = data.sys.country
                // this.setTemperature(data.main.temp)
            })
    }

    // setTemperature(temp) {
    //     let realTemperature = temp / 10
    //     this.temperature.textContent = realTemperature.toFixed(0)
    // }

}