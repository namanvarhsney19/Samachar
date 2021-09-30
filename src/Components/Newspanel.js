import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Newspanel extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d5c38801d040618f7f11825e4b612a&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d5c38801d040618f7f11825e4b612a&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick = async () => {
        console.log("Next")
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6d5c38801d040618f7f11825e4b612a&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            })
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h3>Samachar - Top Headlines</h3>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsitem title={element.title.slice(0, 50)} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.cnet.com/a/img/wz4xdo4KcmNZLwEY8-mopNyfITk=/1200x630/2021/09/28/4eed6ebc-404f-4121-8ba4-4446837475fc/amazon-event-092821-astro-robot-11.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button " className="btn  btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button " className="btn  btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default Newspanel
