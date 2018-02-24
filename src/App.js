import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
        text: ""
    };
    this.handleRepeater = this.handleRepeater.bind(this); 
  }

  handleRepeater(ev){
    this.setState({
        text:ev.target.value
    });
  }  
    
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handleRepeater} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
