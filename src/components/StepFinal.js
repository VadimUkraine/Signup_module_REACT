import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepFinal extends Component {

	constructor(props){
	    super(props)

	    this.state = {	 

	    }

      this.showAllInfo = this.showAllInfo.bind(this);

	}

  showAllInfo(){
    let details ={};
    details.user_data = JSON.stringify(this.props.stateDetails);
    console.log('RESULT --- ', details);
  }

  render() {

    return (
      <div className={this.props.final ? "step_final show_final" : "step_final"}>
        <p className="circle_wrap">
          <i className="fas fa-check fa-5x"></i>
        </p>
        <button 
          className="btn_dashboard"
          type="button"
          onClick={this.showAllInfo}
          >
          Go to Dashboard
          <i className="fas fa-arrow-right"></i>
        </button>      
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  final: state.initState.moves.finalStep,
  stateDetails: state.initState.user_data,
});

export default connect(mapStateToProps, null)(StepFinal);