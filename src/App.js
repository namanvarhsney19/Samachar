
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
    const REACT_APP_NEWS_API = "2c44bf6f1c9b4534b1a372326cbcaeb1"
    // "c6d5c38801d040618f7f11825e4b612a"
    // const apiKey = process.env.REACT_APP_NEWS_API;
    const apiKey = REACT_APP_NEWS_API;

    const [mode, setMode] = useState("light");
    const pageSize = 8;
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('blue');

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = '#181818';
            document.body.style.color = "white";
        }
        else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
            document.body.style.color = "black";
        }
    }

    return (
        <div>
            <Router>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <LoadingBar
                    color={color}
                    progress={progress}
                />
                <Route exact path="/"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="general" /></Route>
                <Route exact path="/business"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="business" /></Route>
                <Route exact path="/entertainment"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="entertainment" /></Route>
                <Route exact path="/general"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="general" /></Route>
                <Route exact path="/health"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="health" /></Route>
                <Route exact path="/science"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="science" /></Route>
                <Route exact path="/sports"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="sports" /></Route>
                <Route exact path="/technology"><Newspanel setProgress={setProgress} setColor={setColor} mode={mode} apiKey={apiKey} pageSize={pageSize} category="technology" /></Route>
                <Switch>
                </Switch>
            </Router>
        </div>
    )
}

export default App;