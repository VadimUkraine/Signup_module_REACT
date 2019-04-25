import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class Password extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	 		password: '',
	 		confirmPassword: ''
	    }
	    
	}

	handleChange = name => event => {
	    this.setState({ [name]: event.target.value});
	    if(event.target.value.length >= 6){
	    	this.props.handlePass(event.target.value);
        	this.props.handleLabelColor(false);
        	this.props.handleLabelNoError('password');
	    }else if(event.target.value.length < 6){
	    	this.props.handlePass('');
	    	this.props.handleLabelColor(true);
        	this.props.handleLabelError('password is required, no less 6 characters long');
	    }

	    if(!event.target.value.length){
	    	this.props.handlePass('');
		  	this.props.handleLabelColor(false);
        	this.props.handleLabelNoError('password');
		}
		if(event.target.value.length >= 6 & (event.target.value === document.getElementById('confirm_password').value) ){
			this.props.handleConfLabelColor(false);
        	this.props.handleConfLabelNoError('confirm password');
		}
        
	    if(event.target.value.length >= 6 & this.props.email.length){
	        this.props.handleBar('40');
	    }else if(event.target.value.length >= 6 & !this.props.email.length){
	        this.props.handleBar('20');
	    }else if(event.target.value.length < 6 & this.props.email.length){
	        this.props.handleBar('20');
	    }else if(event.target.value.length < 6 & !this.props.email.length){
	        this.props.handleBar('0');
		}

	};

	handleChangeConfirm = name => event => {
	    this.setState({ [name]: event.target.value});
	    if(event.target.value.length < 6){
	    	this.props.handleConfLabelColor(true);
        	this.props.handleConfLabelError('confirm password is required, no less 6 characters long');
	    }else if(event.target.value.length >= 6){
	    	if(document.getElementById('password').value !== event.target.value){
	    		this.props.handleConfLabelColor(true);
        		this.props.handleConfLabelError('confirm password is not equal');
	    	}else{
	    		this.props.handleConfLabelColor(false);
        		this.props.handleConfLabelNoError('confirm password');
	    	}
	    }

	    if(!event.target.value.length){
		  	this.props.handleConfLabelColor(false);
        	this.props.handleConfLabelNoError('confirm password');
		}

		if(event.target.value.length >= 6 & (event.target.value === document.getElementById('password').value) ){
			this.props.handleLabelColor(false);
        	this.props.handleLabelNoError('password');
		}	   
	};

  render() {

    return (
        <div className="passwords_wrap">
        	<div className="main_password">
		        <label className={this.props.passLabel ? "password_label error" : "password_label"} htmlFor="password">{this.props.initial.labels.password}</label>
			    <input 
			        id="password" 
			        value={this.state.password} 
			        type="password"
					onChange={this.handleChange('password')}
			    />
		    </div>
		    <div className="confirm_password">
		        <label className={this.props.confPassLabel ? "confirm_password_label error" : "confirm_password_label"} htmlFor="confirm_password">{this.props.initial.labels.confirmPass}</label>
			    <input 
			       	id="confirm_password" 
			       	value={this.state.confirmPassword} 
			       	type="password"
					onChange={this.handleChangeConfirm('confirmPassword')}
			    />
		    </div>	        
      	</div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.initState.user_data.email,
  passLabel: state.initState.moves.passwordLabel,
  confPassLabel: state.initState.moves.confPasswordLabel,
  initial: state.initState,
});

function mapDispatchToProps(dispatch) {
  return {
    handleBar: (data) => dispatch(actions.changeProggresBar(data)), 
    handlePass: (data) => dispatch(actions.newPassword(data)), 
    handleLabelColor: (data) => dispatch(actions.changePasswordLabel(data)), 
    handleLabelError: (data) => dispatch(actions.labelPassError(data)), 
    handleLabelNoError: (data) => dispatch(actions.labelPassNoError(data)), 
    handleConfLabelColor: (data) => dispatch(actions.changeConfPasswordLabel(data)), 
    handleConfLabelError: (data) => dispatch(actions.labelConfPassError(data)), 
    handleConfLabelNoError: (data) => dispatch(actions.labelConfPassNoError(data)),    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);