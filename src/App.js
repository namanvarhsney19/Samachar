
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newspanel from './Components/Newspanel';

export default class App extends Component {

    render() {
        // category = this.props;
        // this.setState({
        //     // category : this.document.getElementById("");
        // })

        return (
            <div>
                <Navbar category="sports" />
                <Newspanel pageSize="4" />
            </div>
        )
    }
}
