// export class to another file
export class News {
    constructor() {

        //Api parametrs
        this.apiKey = 'cafd73a1a4bb442999ce4c3167c3344e';

        //DOM element
        this.articleImg = document.querySelectorAll('.news-article__image');
        this.fromWhereArticle = document.querySelectorAll('.news-article__from-where');
        this.titleArticle = document.querySelectorAll('.news-article__text-title');
        this.expansionArticle = document.querySelectorAll('.news-article__text-expansion')
        this.goToWebSiteNews = document.querySelectorAll('.news-article__read-more')

        this.artciles =[ {
            img: document.querySelector('.news-article__image'),
            fromWhere: document.querySelector('.news-article__from-where'),
            title: document.querySelector('.news-article__text-title'),
            expansion: document.querySelector('.news-article__text-expansion'),
            websiteNews: document.querySelector('.news-article__read-more'),
        },  ]
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
  

            //set content, title and source news for article 
            this.titleArticle[i].textContent = `${articles[i].title.substring(0, 40)} ...`
            this.fromWhereArticle[i].textContent = `${articles[i].source.name}`;
            this.goToWebSiteNews[i].setAttribute('href', articles[i].url)

            //Check what type is article, and cut this to max characters
            if (typeof articles[i].description === 'string') {
                this.expansionArticle[i].textContent = `${articles[i].description.substring(0, 80)} ...`
            } else {

                //When some articles don't have image I set own
                this.expansionArticle[i].textContent = `Przejdź na strone artykułu, żeby dowiedzieć się więcej!`
            }

            //clear atrubute for next category
            this.articleImg[i].setAttribute('src', '')

            //checking article has photo and set this 
            if (typeof articles[i].urlToImage === 'string') {
                this.articleImg[i].setAttribute('src', articles[i].urlToImage)

            } else {
                //somtimes article don't have img, here I set own photo
                this.articleImg[i].setAttribute('src', './src/images/no-image.jpg')
            }
        }

    }
}