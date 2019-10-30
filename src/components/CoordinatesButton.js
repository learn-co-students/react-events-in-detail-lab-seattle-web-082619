import React from "react";

export default class CoordinatesButton extends React.Component {
  state = {
    coordXY: [0, 0]
  };

  handleCoordinatesClick = e => {
    // console.log(e.clientX, e.clientY);
    this.setState = {
      coordXY: [e.clientX, e.clientY]
    };
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };
  render() {
    return (
      <button onClick={this.handleCoordinatesClick}>Log Coordinates</button>
    );
  }
}
