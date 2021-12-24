export class Localization {
    constructor(setParametersForTodayTemperature) {

        this.todayTemperature = setParametersForTodayTemperature; 

        // API parametrs 
        this.apiKey = 'cc12c5b435d66d200bd213f429d2c571'

        //DOM element
        this.iconLocalization = document.querySelector('.weather-today__localization-icon');
        this.weatherMap = document.querySelector('.weather-map');
        this.inputMap = document.querySelector('.weather-map__input');

        //running methods for map
        this.setLocalizationByMap();
        this.createMap();
    }

    setLocalizationByMap() {
        this.iconLocalization.addEventListener('click', () => {
            this.weatherMap.classList.toggle('weather-map--active');
        })
    }

    //Use outside method for map to set localization
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
            this.todayTemperature(e.latlng)
            let weatherMap = document.querySelector('.weather-map');
            weatherMap.classList.remove('weather-map--active');
        })
    }
}