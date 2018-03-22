import React, { Component } from 'react';

import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <div className="content">
                <h1>Simple react boilerplate</h1>
                <Home />
            </div>
        )
    }
  }

export default App;