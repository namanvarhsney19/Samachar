import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'


export class Newspanel extends Component {
    static defaultProps = {
        category: 'general',
        pageSize: 8
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Samachar`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c6d5c38801d040618f7f11825e4b612a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "white";
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{ margin: "30px 0px" }}>Samachar - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {this.state.loading === false && this.state.articles.map((element) => {
                        return element ? <div className="col-md-3" key={element.url}>
                            <Newsitem title={element.title.slice(0, 50)} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.cnet.com/a/img/wz4xdo4KcmNZLwEY8-mopNyfITk=/1200x630/2021/09/28/4eed6ebc-404f-4121-8ba4-4446837475fc/amazon-event-092821-astro-robot-11.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} category={this.props.category} />
                        </div> : <h1>This is the error</h1>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button " className="btn  btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button " className="btn  btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default Newspanel
