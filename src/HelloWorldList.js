import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
render() {
  return (
    <div className="HelloWorldList">
      {this.renderGreetings()}
    </div>
  );
}
constructor(props) {
  super(props);
  this.state = { greetings: ['Jim', 'Sally', 'Bender'] };
}
renderGreetings() {
  return this.state.greetings.map(name => (
    <HelloWorld key={name} name={name}/>
  ));
}
}
export default HelloWorldList;