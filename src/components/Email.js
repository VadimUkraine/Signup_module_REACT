import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class Email extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	 		email:''
	    }

	}

	handleChange = name => event => {
		  this.setState({ [name]: event.target.value });   
		  let emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		  if(emailValid === null){
		  	this.props.handleEmailLabel(true);
		  	this.props.handleEmailLabelError('email is required');
		  }else{
		  	this.props.handleEmail(event.target.value);
			this.props.handleEmailLabel(false);
			this.props.handleEmailLabelNoError('email');
		  }
		  if(!event.target.value.length){
		  	this.props.handleEmailLabel(false);
		  	this.props.handleEmailLabelNoError('email');
		  }
	      if(emailValid !== null & this.props.initial.user_data.password.length){
 			 this.props.handleBar('40');
	      }else if(emailValid !== null & !this.props.initial.user_data.password.length){
	      	 this.props.handleBar('20');
	      }else if(emailValid === null & !this.props.initial.user_data.password.length){
	      	 this.props.handleBar('0');
	      }else if(emailValid === null & this.props.initial.user_data.password.length){
	      	 this.props.handleBar('20');
	      }   
	};

  render() {

    return (
        <div className="email_wrap">
	        <label className={this.props.initial.moves.emailLabel ? "email_label error" : "email_label"} htmlFor="email">{this.props.initial.labels.email}</label>
	        <input 
	        	id="email" 
	        	value={this.state.email} 
	        	type="email"
				onChange={this.handleChange('email')}
	        	/>
      	</div>
    );
  }
}


const mapStateToProps = (state) => ({
  initial: state.initState,
});

function mapDispatchToProps(dispatch) {
  return {
    handleEmail: (email) => dispatch(actions.changeEmail(email)),
    handleBar: (data) => dispatch(actions.changeProggresBar(data)),
    handleEmailLabel: (data) => dispatch(actions.changeEmailLabel(data)), 
    handleEmailLabelError: (data) => dispatch(actions.labelEmailError(data)), 
    handleEmailLabelNoError: (data) => dispatch(actions.labelEmailNoError(data)), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Email);