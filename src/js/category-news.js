import {
    News
} from './news';

export class CategoryNews {
    constructor() {
        this.newsApiCategoryItems = document.querySelectorAll('.nav-news__items');
        this.news = new News;
        this.chooseCategory()
    }
    chooseCategory() {
        for (let i = 0; i < this.newsApiCategoryItems.length; i++) {
            this.newsApiCategoryItems[i].addEventListener('click', () => {
                const category = this.newsApiCategoryItems[i].dataset.option;
                this.news.getDataFromApiByCategory(category)
            });

        }
    }

}