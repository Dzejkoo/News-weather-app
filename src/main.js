import './sass/main.scss'

import {
    Weather
} from './js/weather';

// import {
//     News
// } from './js/news'

import {
    CategoryNews
} from './js/category-news'

document.addEventListener('DOMContentLoaded', () => {
    new CategoryNews();

    new Weather('Poznań')

})