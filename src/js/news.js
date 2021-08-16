export class News {
    constructor(category) {
        this.apiKey = 'cafd73a1a4bb442999ce4c3167c3344e';
        this.apiCategory = category
        this.getDataFromApi()

    }
    getDataFromApi() {
        fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=${this.apiCategory}&apiKey=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

}