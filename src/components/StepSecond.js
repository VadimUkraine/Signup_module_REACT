import React, { Component } from 'react';
import DateBirth from './DateBirth';
import Gender from './Gender';
import ComeToUs from './ComeToUs';

class StepSecond extends Component {

	constructor(props){
	    super(props)

	    this.state = {}
	}

  render() {

    return (
      <div className={this.props.show ? "second_step step_show" : "second_step"}>
        <DateBirth />
        <Gender />
        <ComeToUs />
      </div>
    );
  }
}

export default StepSecond;