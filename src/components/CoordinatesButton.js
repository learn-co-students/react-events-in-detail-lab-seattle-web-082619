import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = click => this.props.onReceiveCoordinates([click.clientX, click.clientY])

  render() {
    return <button onClick={this.handleClick}>Coordinates</button>
  }
}