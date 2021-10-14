
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
    const apiKey = process.env.REACT_APP_NEWS_API;

    const pageSize = 8;
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('blue');

    return (
        <div>
            <Router>
                <Navbar />
                <LoadingBar
                    color={color}
                    progress={progress}
                />
                <Route exact path="/"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="general" /></Route>
                <Route exact path="/business"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="business" /></Route>
                <Route exact path="/entertainment"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="entertainment" /></Route>
                <Route exact path="/general"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="general" /></Route>
                <Route exact path="/health"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="health" /></Route>
                <Route exact path="/science"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="science" /></Route>
                <Route exact path="/sports"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="sports" /></Route>
                <Route exact path="/technology"><Newspanel setProgress={setProgress} setColor={setColor} apiKey={apiKey} pageSize={pageSize} category="technology" /></Route>
                <Switch>
                </Switch>
            </Router>
        </div>
    )
}

export default App;