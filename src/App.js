import React from "react";
import PropTypes from "prop-types";

//class component: has to extend from react component and use render method to show up on screen
//state: object. dynamic data of component
//this.add()가 아닌 이유: ()는 즉시 발동, add만 해야 click할 때만

//setState(): refresh state and rerender
//Mounting
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("mount");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count +1 }));
  };
  minus = () => {
    this.setState(current => ({count: current.count -1 }));
  };

  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  render(){
    console.log("I am rendering");
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