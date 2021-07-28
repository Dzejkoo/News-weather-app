import './sass/main.scss'

import {
    Weather
} from './js/weather';

document.addEventListener('DOMContentLoaded', () => {
    const weather = new Weather()
    weather.findLocalization('poznan')
})