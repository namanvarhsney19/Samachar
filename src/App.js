
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

    render() {
        // category = this.props;
        // this.setState({
        //     // category : this.document.getElementById("");
        // })

        return (
            <div>
                <Router>
                    <Navbar />
                    <Route exact path="/"><Newspanel pageSize={10} category="general" /></Route>
                    <Route exact path="/business"><Newspanel pageSize={10} category="business" /></Route>
                    <Route exact path="/entertainment"><Newspanel pageSize={10} category="entertainment" /></Route>
                    <Route exact path="/general"><Newspanel pageSize={10} category="general" /></Route>
                    <Route exact path="/health"><Newspanel pageSize={10} category="health" /></Route>
                    <Route exact path="/science"><Newspanel pageSize={10} category="science" /></Route>
                    <Route exact path="/sports"><Newspanel pageSize={10} category="sports" /></Route>
                    <Route exact path="/technology"><Newspanel pageSize={10} category="technology" /></Route>
                    <Switch>
                    </Switch>
                </Router>
            </div>
        )
    }
}
