import './sass/main.scss'

import {
    Weather
} from './js/weather';

import {
    Localization
} from './js/localization-weather'

import {
    CategoryNews
} from './js/category-news'

document.addEventListener('DOMContentLoaded', () => {
    const weather = new Weather(); 

    new CategoryNews();
    new Localization(weather.setParametersForTodayTemperature);
})