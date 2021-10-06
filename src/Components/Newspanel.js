import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Samachar`;
    }

    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c6d5c38801d040618f7f11825e4b612a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c6d5c38801d040618f7f11825e4b612a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };

    async componentDidMount() {
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "white";
        this.updateNews();
    }
    render() {
        return (
            <>
                <h2 className="text-center" style={{ margin: "30px 0px" }}>Samachar - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row my-3">
                            {this.state.articles.map((element) => {
                                return element ? <div className="col-md-3" key={element.url}>
                                    <Newsitem title={element.title.slice(0, 50)} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://www.cnet.com/a/img/wz4xdo4KcmNZLwEY8-mopNyfITk=/1200x630/2021/09/28/4eed6ebc-404f-4121-8ba4-4446837475fc/amazon-event-092821-astro-robot-11.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} category={this.props.category} />
                                </div> : <h1>This is the error</h1>
                            })}
                        </div>

                    </div>
                </InfiniteScroll>
            </ >
        )
    }
}
export default Newspanel
