import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

import Kata from './components/kata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katas: [],
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          katas: json,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          katas: [],
          fetching: false
        });
      })
  }

  render() {
    const katas = this.state.katas.map(
      ({description, tests}, i) => <Kata key={i} id={i} description={description} tests={tests}/>
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {'This is '}
          <a href="https://github.com/mars/heroku-cra-node">
            {'create-react-app with a custom Node/Express server'}
          </a><br/>
        </p>
        {katas}
      </div>
    );
  }
}

export default App;
