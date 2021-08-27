import {
    Weather
} from "./weather";

export class Localization {
    constructor() {
        this.iconLocalization = document.querySelector('.weather-today__localization-icon');
        this.weatherMap = document.querySelector('.weather-map');
        this.setLocalizationByMap();
        this.createMap();
    }

    setLocalizationByMap() {
        this.iconLocalization.addEventListener('click', () => {
            this.weatherMap.classList.toggle('weather-map--active');

        })

    }

    createMap() {
        let zoom = 6;
        let lat = 50.2297700;
        let lon = 21.0117800;
        /* eslint-disable */

        let map = L.map('map').setView([lat, lon], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', function (e) {
            const weather = new Weather();
            weather.setParametersForTodayTemperature(e.latlng)
            console.log(e.latlng);
            let weatherMap = document.querySelector('.weather-map');
            weatherMap.classList.remove('weather-map--active');
        })
    }
}