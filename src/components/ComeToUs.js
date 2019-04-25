import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class ComeToUs extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	    }

       this.handleChange = this.handleChange.bind(this);

	}


  handleChange(event) {
    this.props.selectGetInfo(event.target.value);
  }

  render() {

    return (
      <div className="come_wrap">
        <p className="come_title">WHERE DID YOU HEAR ABOUT IS?</p>
        <div className="come_content">
          <select className="come_select" value={this.props.initial} onChange={this.handleChange} >
            <option value="internet">Internet</option>
            <option value="friends">Friends</option>
            <option value="other">Other</option>
          </select>  	
          <i className="fas fa-chevron-down"></i>		
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  initial: state.initState.user_data.how_hear_about_us,
});

function mapDispatchToProps(dispatch) {
  return {
    selectGetInfo: (data) => dispatch(actions.selectGetInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComeToUs);