import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class NextButton extends Component {

	constructor(props){
	    super(props)

	    this.state = {}

      this.moveStepForward = this.moveStepForward.bind(this);
	}

  moveStepForward(){   

    if(this.props.steps.secondStep === false){
      if(!this.props.initial.user_data.email.length){
        this.props.handleEmailLabel(true);
        this.props.handleEmailLabelError('email is required');
      }

      if(!document.getElementById('confirm_password').value.length){
        this.props.handleConfLabelColor(true);
        this.props.handleConfLabelError('password is required');
      }
 
      if(!document.getElementById('password').value.length){
        this.props.handleLabelColor(true);
        this.props.handleLabelError('password is required')
      }

      if(this.props.initial.user_data.email.length & this.props.initial.user_data.password.length){       
        if(document.getElementById('confirm_password').value === this.props.initial.user_data.password){
          this.props.handleStep();
        }else{
          this.props.handleLabelColor(true);
          this.props.handleLabelError('passwords are not equal');
          this.props.handleConfLabelColor(true);
          this.props.handleConfLabelError('passwords are not equal');
        }
      }      
    }else{
      let day = Number(document.getElementById('date').value);
      let month = Number(document.getElementById('month').value) -1;
      let year = Number(document.getElementById('year').value);
      let birthDate = +new Date(year, month, day);
      let currentDate = +new Date();
      let existDate = new Date(year, month, day).getDate();        

      if(!this.props.initial.user_data.gender.length){  
        this.props.handleGenderLabelError('One gender option must be selected');
      }

      if(existDate !== day){
        this.props.handleDateLabelError('date not correct');
      }else if(existDate === day & (currentDate - birthDate) < (31536000000*18)){
        this.props.handleDateLabelError('the user must be 18 year old or more');
      }else if(this.props.initial.user_data.gender.length & this.props.initial.user_data.date_of_birth.toString().length){
        this.props.handleBar('100');
        this.props.handleFinal();    
      }

      if(!document.getElementById('date').value.length || !document.getElementById('month').value.length || !document.getElementById('year').value.length){
        this.props.handleDateLabelError('date not correct');
      } 
    }    
  }

  render() {

    return (
        <button 
          className="btn_next"
          type="button"
          onClick={this.moveStepForward}
          >
          Next
          <i className="fas fa-arrow-right"></i>
        </button>
    );
  }
}

const mapStateToProps = (state) => ({
  steps: state.initState.moves,
  initial: state.initState,
})

function mapDispatchToProps(dispatch) {
  return {
    handleStep: () => dispatch(actions.moveToStepTwo()),
    handleFinal: () => dispatch(actions.moveToFinalStep()),
    handleEmailLabel: (data) => dispatch(actions.changeEmailLabel(data)), 
    handleEmailLabelError: (data) => dispatch(actions.labelEmailError(data)),     
    handleBar: (data) => dispatch(actions.changeProggresBar(data)),
    handleDateLabelError: (data) => dispatch(actions.dateLabelError(data)),
    handleGenderLabelError: (data) => dispatch(actions.genderLabelError(data)),
    handleSelectDateBirth: (data) => dispatch(actions.selectDateBirth(data)),
    handleLabelColor: (data) => dispatch(actions.changePasswordLabel(data)), 
    handleLabelError: (data) => dispatch(actions.labelPassError(data)), 
    handleConfLabelColor: (data) => dispatch(actions.changeConfPasswordLabel(data)), 
    handleConfLabelError: (data) => dispatch(actions.labelConfPassError(data)),     
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);