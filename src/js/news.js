export class News {
    constructor() {
        this.apiKey = 'cafd73a1a4bb442999ce4c3167c3344e';
        this.articleImg = document.querySelectorAll('.news-article__image');
        this.fromWhereArticle = document.querySelectorAll('.news-article__from-where');

    }
    getDataFromApiByCategory(category) {
        fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=${category}&apiKey=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {
                // this.setPropertyForNews(data)
                this.setImageForArticle(data.articles)
            })
    }

    // setPropertyForNews(news) {
    //     const textTittle = news.articles[0].title
    //     console.log(textTittle, news)
    // }

    setImageForArticle(articles) {
        for (let i = 0; i < 3; i++) {
            this.articleImg[i].setAttribute('src', articles[i].urlToImage)
        }

    }
}