
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Newspanel />
            </div>
        )
    }
}
