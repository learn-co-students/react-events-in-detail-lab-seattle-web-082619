import React from 'react';


class CoordinatesButton extends React.Component{
  // react.component to pull from imported react the component piece 
  
// return to this page 
    onClick=(e)=>{
    let ex = e.clientX
    let why = e.clientY
    this.props.onReceiveCoordinates([e.clientX,e.clientY]);
    // console.log("ex and why",ex,why);

  }


  render(){
    // creating a button that on the click of the button will create an array with the x and y coordinates
    return (  
      <button 
      onClick = {this.onClick} 
      >Click</button>
    )
  }


}


export default CoordinatesButton