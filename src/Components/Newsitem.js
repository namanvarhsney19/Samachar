import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, source, category } = this.props;
        let badgeColor = { "science": "primary", "entertainment": "danger", "technology": "primary", "business": "secondary", "health": "danger", "sports": "warning", "general": "primary" }
        return (
            <div className="card my-1" style={{ backgroundColor: "#282828" }}>

                <span className={`position-absolute badge rounded-pill bg-${badgeColor[category]}`} style={{ zIndex: "1", right: "0" }}>{source}</span>

                <img src={imageUrl} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${badgeColor[category]}`}>Read More</a>
                </div>
            </div >
        )
    }
}

export default Newsitem
