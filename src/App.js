
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

    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                    />
                    <Route exact path="/"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/business"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="business" /></Route>
                    <Route exact path="/entertainment"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="entertainment" /></Route>
                    <Route exact path="/general"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/health"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="health" /></Route>
                    <Route exact path="/science"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="science" /></Route>
                    <Route exact path="/sports"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="sports" /></Route>
                    <Route exact path="/technology"><Newspanel setProgress={this.setProgress} pageSize={this.pageSize} category="technology" /></Route>
                    <Switch>
                    </Switch>
                </Router>
            </div>
        )
    }
}
