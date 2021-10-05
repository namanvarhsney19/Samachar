import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, source, category } = this.props;
        let badgeColor = { "science": "primary", "entertainment": "danger", "technology": "primary", "business": "secondary", "health": "danger", "sports": "warning" }
        return (
            <div className="card" style={{ backgroundColor: "#282828" }}>
                <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor[category]}`} style={{ left: "90%", zIndex: "1" }}>{source}</span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newsitem
