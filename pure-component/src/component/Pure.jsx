import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
  render() {
    return (
      <div style={{display: 'inline-flex', width: '30%', height: '100px', margin: '10%', justifyContent: 'center', alignItems: 'center'}}>
        {this.props.greeting} PureComponent
      </div>
    )
  }
}
