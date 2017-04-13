import React, { Component } from 'react';
import './HelloWorld.css';



class HelloWorld extends Component {
	constructor(props) {
  super(props);
  this.remaind = this.remaind.bind(this);
  this.state = { greeting: 'To buy' };
   this.removeGreeting = this.removeGreeting.bind(this);
  
}
  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }
  render() {
    return (
    <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!  price ：{this.props.price}
      <br/>
      <button className="remaind" onClick={this.remaind}>Have you bought it?</button>
      <br />
      <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
    </div>
    );
  }
remaind() {
  this.setState({ greeting: 'Have bought' });
}
}


export default HelloWorld;