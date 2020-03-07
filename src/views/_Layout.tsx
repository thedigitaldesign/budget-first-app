import React, { Component } from 'react'

export default class _Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
