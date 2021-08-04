import React from "react";
import PropTypes from "prop-types";

//class component: has to extend from react component and use render method to show up on screen
//state: object. dynamic data of component
//this.add()가 아닌 이유: ()는 즉시 발동, add만 해야 click할 때만
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };


  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;