export class News {
    constructor() {
        this.apiKey = 'cafd73a1a4bb442999ce4c3167c3344e';
        this.articleImg = document.querySelectorAll('.news-article__image');
        this.fromWhereArticle = document.querySelectorAll('.news-article__from-where');
        this.titleArticle = document.querySelectorAll('.news-article__text-title');
        this.expansionArticle = document.querySelectorAll('.news-article__text-expansion')

    }
    getDataFromApiByCategory(category) {
        fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=${category}&apiKey=${this.apiKey}`)
            .then(resp => resp.json())
            .then((data) => {
                this.setPropertyForNews(data.articles)
            })
    }

    setPropertyForNews(articles) {

        for (let i = 0; i < this.articleImg.length; i++) {

            //set content, title and  for article, from API and cut this by substring to max characters 
            this.titleArticle[i].textContent = `${articles[i].title.substring(0, 40)}...`
            this.expansionArticle[i].textContent = `${articles[i].content.substring(0, 80)}...`
            this.fromWhereArticle[i].textContent = `${articles[i].source.name}`;

            this.articleImg[i].setAttribute('src', '')

            if (typeof articles[i].urlToImage === 'string') {
                this.articleImg[i].setAttribute('src', articles[i].urlToImage)

            } else {
                this.articleImg[i].setAttribute('src', './src/images/no-image.jpg')
            }
        }

    }
    // setTextForArticles(title) {
    //     let maxTitleLetter = title.substring(0, 40);
    //     this.titleAricle.textContent = `${maxTitleLetter}...`

    // }
}