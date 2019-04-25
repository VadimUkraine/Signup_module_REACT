import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class Gender extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	       isGender:''

	    }

	}

  handleChange = () => event => {
    this.setState({ isGender: event.nativeEvent.target.getAttribute("id")}); 
    this.props.selectGender(event.nativeEvent.target.getAttribute("id"));
    this.props.handleGenderLabelError('gender');

    if(this.props.dateBirth.toString().length){
      this.props.handleBar('80');
    }else{
      this.props.handleBar('60');
    }

  }


  render() {

    return (
      <div className="gender_wrap">
        <p className={this.props.genderLabel === 'gender' ? "gender_title" : "gender_title error"}>{this.props.genderLabel}</p>
        <div className="gender_content">
  			<p id="male" className={this.state.isGender === 'male' ? "select_gender" : null} onClick={this.handleChange()}>MALE</p>
  			<p id="female" className={this.state.isGender === 'female' ? "select_gender" : null} onClick={this.handleChange()}>FEMALE</p>
  			<p id="unspecified" className={this.state.isGender === 'unspecified' ? "select_gender" : null} onClick={this.handleChange()}>UNSPECIFIED</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    genderLabel: state.initState.labels.gender,
    dateBirth: state.initState.user_data.date_of_birth,
});

function mapDispatchToProps(dispatch) {
  return {
    selectGender: (data) => dispatch(actions.selectGender(data)),
    handleGenderLabelError: (data) => dispatch(actions.genderLabelError(data)),
    handleBar: (data) => dispatch(actions.changeProggresBar(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gender);