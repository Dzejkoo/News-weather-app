import {
    News
} from './news';

export class CategoryNews {
    constructor() {
        this.newsApiCategoryItems = document.querySelectorAll('.nav-news__item');
        this.news = new News;
        this.chooseCategory()
    }
    chooseCategory() {
        for (let i = 0; i < this.newsApiCategoryItems.length; i++) {

            this.newsApiCategoryItems[i].addEventListener('click', () => {
                const category = this.newsApiCategoryItems[i].dataset.option;
                this.newsApiCategoryItems.forEach(item => item.classList.remove('nav-news__item--active'))
                this.newsApiCategoryItems[i].classList.add('nav-news__item--active');
                this.news.getDataFromApiByCategory(category)
            });

        }
    }

}