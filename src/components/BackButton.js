import React, { Component } from 'react';

class BackButton extends Component {

	constructor(props){
	    super(props)

	    this.state = { }

	}

  render() {

    return (
        <button 
          className="btn_back"
          type="button"
          onClick={this.props.togglePopUp}
          >
          Back
        </button>
    );
  }
}

export default BackButton;