import React, {Component} from 'react';
// import onReceiveCoordinates from '../index';

class CoordinateButton extends Component {
    handleClick(e) {
        const array = [];
        array.push(e.clientX, e.clientY);
        this.props.onReceiveCoordinates(array);
    }
    
    render() {
        return(
            <button onClick={this.handleClick.bind(this)}>Click Here</button>
        )
    }
}

export default CoordinateButton