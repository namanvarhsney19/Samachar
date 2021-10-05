
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
export default class App extends Component {
    pageSize = 10;
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route exact path="/"><Newspanel pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/business"><Newspanel pageSize={this.pageSize} category="business" /></Route>
                    <Route exact path="/entertainment"><Newspanel pageSize={this.pageSize} category="entertainment" /></Route>
                    <Route exact path="/general"><Newspanel pageSize={this.pageSize} category="general" /></Route>
                    <Route exact path="/health"><Newspanel pageSize={this.pageSize} category="health" /></Route>
                    <Route exact path="/science"><Newspanel pageSize={this.pageSize} category="science" /></Route>
                    <Route exact path="/sports"><Newspanel pageSize={this.pageSize} category="sports" /></Route>
                    <Route exact path="/technology"><Newspanel pageSize={this.pageSize} category="technology" /></Route>
                    <Switch>
                    </Switch>
                </Router>
            </div>
        )
    }
}
