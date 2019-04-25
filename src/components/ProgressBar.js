import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {

	constructor(props){
	    super(props)

	    this.state = {}
	}

  render() {

    return (
      <div className="bar_wrapper">
        <span className="progress_bar" style={{'width': this.props.progressBar + '%'}}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  progressBar: state.initState.moves.progressBar,
})

export default connect(mapStateToProps, null)(ProgressBar);