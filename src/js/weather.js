export class Weather {
    constructor() {
        this.apiKey = 'cc12c5b435d66d200bd213f429d2c571'
        this.url = `https://api.openweathermap.org/data/2.5/`
        this.localization = document.querySelector('.weater__localization')
    }

    findLocalization(localization) {
        return fetch(`${this.url}weather?q=${localization}&appid=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {
                this.localization.textContent = data.name
            })
    }
}