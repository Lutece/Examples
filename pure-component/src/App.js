import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pure from './component/Pure';
import Normal from './component/Normal';
import Controlled from './component/Controlled';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      greeting: 'Hello'
    }
  }

  componentDidMount() {
    setInterval( _ => {
      this.setState({
        counter: this.state.counter + 1
      }, _ => {
        if(this.state.counter > 5 && this.state.greeting === 'Hello') {
          this.setState({
            greeting: 'Hi'
          });
        }
      })
    }, 1000)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PureComponent Test</h1>
        </header>
        <p className="App-intro">
          Test Counter {this.state.counter}
        </p>
        <hr />
        <Pure greeting={this.state.greeting} />
        <Normal greeting={this.state.greeting} />
        <Controlled counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
