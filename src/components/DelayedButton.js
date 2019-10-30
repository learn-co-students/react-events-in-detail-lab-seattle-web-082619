import React from "react";

export default class DelayedButton extends React.Component {
  handleDelayClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return (
      <button onClick={this.handleDelayClick}>Delayed Button Effect</button>
    );
  }
}

// props:
// onDelayedClick - consolelogs the event
// delay time
