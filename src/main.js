import './sass/main.scss'

import {
    Weather
} from './js/weather';

document.addEventListener('DOMContentLoaded', () => {
    new Weather('Poznań')
})