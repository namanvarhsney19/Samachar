
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    pageSize = 8;
    apiKey = process.env.REACT_APP_NEWS_API;

    state = {
        progress: 0,
        // color: '#f11946'
        color: 'blue'
    }
    setProgress = (progress, color) => {
        this.setState({
            progress: progress,
            color: color
        })
    }
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color={this.state.color}
                        progress={this.state.progress}
                    />
                    <Route exact path="/"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/business"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="business" /></Route>
                    <Route exact path="/entertainment"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="entertainment" /></Route>
                    <Route exact path="/general"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/health"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="health" /></Route>
                    <Route exact path="/science"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="science" /></Route>
                    <Route exact path="/sports"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="sports" /></Route>
                    <Route exact path="/technology"><Newspanel setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} category="technology" /></Route>
                    <Switch>
                    </Switch>
                </Router>
            </div>
        )
    }
}
