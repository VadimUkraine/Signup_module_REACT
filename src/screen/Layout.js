import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';
import StepFinal from '../components/StepFinal';
import Form from '../components/Form';

class Layout extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	    }

	}

  render() {

    return (
      <div className="form">
        <h3 className="form_title">Signup</h3>
        <ProgressBar
          progress={this.props.progressBar}
        />
        <div className="dashboard_wrap">
          <Form/>
          <StepFinal />
        </div>     
      </div>
    );
  }
}

export default Layout;