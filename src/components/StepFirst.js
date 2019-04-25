import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';

class StepFirst extends Component {

	constructor(props){
      super(props)

      this.state = {
      }  

  }

  render() {

    return (
      <div className="first_step">
        <Email/>
        <Password/>
      </div>
    );
  }
}

export default StepFirst;