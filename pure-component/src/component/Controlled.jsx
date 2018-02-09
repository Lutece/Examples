import React, { Component } from 'react'

export default class Controlled extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.counter > 5) ? true : false;
  }
  

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', margin: '10%' }}>
        I'm controlled Component by shouldComponentUpdate
      </div>
    )
  }
}
