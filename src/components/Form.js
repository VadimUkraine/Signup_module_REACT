import React, { Component } from 'react';
import StepFirst from '../components/StepFirst';
import StepSecond from '../components/StepSecond';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { connect } from 'react-redux';

class Form extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	    }
	}

  render() {

    return (
      <div className="form_fields">
          <div className="module"> 
            <StepFirst />
            <StepSecond show={this.props.stepTwo}/>
          </div>       
          <div className="btns_wrap">
            {this.props.stepTwo && <BackButton/>}
            <NextButton/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stepTwo: state.initState.moves.secondStep,
})

export default connect(mapStateToProps, null)(Form);