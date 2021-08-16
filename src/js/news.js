export class News {
    constructor() {
        this.apiKey = 'cafd73a1a4bb442999ce4c3167c3344e';

    }
    getDataFromApiByCategory(category) {
        fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=${category}&apiKey=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

}