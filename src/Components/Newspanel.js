import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const Newspanel = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // eslint-disable-next-line
    const updateNews = async () => {
        const topLoadingBarColor = { "science": "blue", "entertainment": "red", "technology": "blue", "business": "grey", "health": "red", "sports": "#ffc107", "general": "red" }
        let color = topLoadingBarColor[props.category];
        props.setProgress(0);
        props.setColor(color);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);
        props.setProgress(10);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Samachar`;
        updateNews();
    }, [])

    let defaultImageUrl = "https://www.cnet.com/a/img/wz4xdo4KcmNZLwEY8-mopNyfITk=/1200x630/2021/09/28/4eed6ebc-404f-4121-8ba4-4446837475fc/amazon-event-092821-astro-robot-11.jpg";
    return (
        <>
            <h2 className="text-center" style={{ margin: "30px 0px", marginTop: "90px" }}>Samachar - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row my-3">
                        {articles.map((element) => {
                            return element ? <div className="col-md-3" key={element.url}>
                                <Newsitem title={element.title.slice(0, 50)} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : defaultImageUrl} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} category={props.category} mode={props.mode} />
                            </div> : <h1>This is the error</h1>
                        })}
                    </div>

                </div>
            </InfiniteScroll>
        </ >
    )

}

Newspanel.defaultProps = {
    category: 'general',
    pageSize: 8
}
export default Newspanel
