import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './ShopList.css';

class ShopList extends Component {

  constructor(props) {
  super(props);
 
  this.addGreeting = this.addGreeting.bind(this);
   this.addPrice = this.addPrice.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
  this.removePriceing = this.removePriceing.bind(this);
  this.state = { greetings: ['potato','beef','chicken'] ,
                 price: ['5','6','7']     
};
}
addPrice(price) {
   
    this.setState({ price: [...this.state.price, price] });
  } 
addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
    
  } 

  // removeGreeting(removeName) {
  //   const filteredGreetings = this.state.greetings.filter(name => {
  //   return name !== removeName;
  // });
  //   this.setState({ greetings: filteredGreetings });
  // }
removeGreeting(removeName) {

    const filteredGreetings = this.state.greetings.filter(name => {
    return name !== removeName;
  });

    this.setState({ greetings: filteredGreetings });
  }
      removePriceing(removePrice) {


         const filteredprices = this.state.greetings.filter(price => {
    return price !== removePrice;
  });

  

    this.setState({ price: filteredprices});
  }

  renderGreetings() {

    return this.state.greetings.map(name => (
    <HelloWorld
      key={name}
      name={name}
     
 price={this.state.price.map(price=>{
       
      return price

 })}
      removePriceing={this.removePriceing}
      removeGreeting={this.removeGreeting}/>
    ));

  }
     





  render() {
    return (
      <div className="ShopList">
       <h1>Shop list</h1>
        <AddGreeter addGreeting={this.addGreeting}
           addPriceing={this.addPriceing}/>
        
       
         {this.renderGreetings()}
         
      </div>
    );
  }
}
export default ShopList;