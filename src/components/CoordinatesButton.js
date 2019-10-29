import React, { Component } from 'react';

class CoordinatesButton extends Component {
  getXYCoords = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY]);

  render() {
    return <button onClick={ (event) => this.getXYCoords(event) }> Coordinates Button </button>
  }
}

export default CoordinatesButton;