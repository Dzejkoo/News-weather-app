import './sass/main.scss'

import {
    Weather
} from './js/weather';

import {
    News
} from './js/news'

document.addEventListener('DOMContentLoaded', () => {
    new Weather('Poznań')
    new News('sports');
})