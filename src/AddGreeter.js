import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '', Price: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdate2 = this.handleUpdate2.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
    this.addPriceing =this.addPriceing.bind(this);
  }
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }
    handleUpdate2(event) {
    this.setState({ Price: event.target.value });
  }
  addGreeting() {
  this.props.addGreeting(this.state.greetingName);
  this.setState({ greetingName: '' });
  }
  addPriceing() {
  this.props.addPriceing(this.state.Price);
   this.setState({ Price: '' });
}

  
render() {
  return (
    <div className="AddGreeter">
    Name
      <input
        type="text"
        onChange={this.handleUpdate}
        value={this.state.greetingName}/>
        Price :
      <input
        type="text"
        onChange={this.handleUpdate2}
        value={this.state.Price}/>ERO
      &nbsp;&nbsp;
      <button onClick={this.addGreeting}>Add</button>
       <button onClick={this.addPriceing}>addPriceing</button>
    </div>
  );
}
}

export default AddGreeter;