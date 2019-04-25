import React, { Component } from 'react';
import './App.css';
import Layout from './screen/Layout'

class App extends Component {

  constructor(props){
      super(props)

      this.state = {
   
      }

  }

  render() {
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}

export default App;