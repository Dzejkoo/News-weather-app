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
    new CategoryNews();
    new Localization();
    new Weather()



})