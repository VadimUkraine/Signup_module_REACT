import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/stateAction';

class DateBirth extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	       date: '',
         month: '',
         year: ''
	    }

	}

  handleChange = name => event => {
      if(name === 'date'){
        this.props.handleDateLabelError('date of birth');
        if(event.target.value.length<=2){
          if(event.target.value.match(/^\d+$/) === null){
            if(Number(event.target.value.length) === 1){
              this.setState({ [name]: ''});
            }else{
              this.setState({ [name]: event.target.value.slice(0,1)});  
            }            
          }else if(event.target.value === '00' ){
            this.setState({ [name]: event.target.value.slice(0,1)});
          }else if(Number(event.target.value) > 31){
            this.setState({ [name]: event.target.value.slice(event.target.value.length-2, event.target.value.length-1)});
          }else{
            this.setState({ [name]: event.target.value}); 
          }    
        }else if(event.target.value.length > 2){
          this.setState({ [name]: event.target.value.slice(0,2)}); 
        }
      }else if(name === 'month'){
        this.props.handleDateLabelError('date of birth');
        if(event.target.value.length<=2){
          if(event.target.value.match(/^\d+$/) === null){
            if(Number(event.target.value.length) === 1){
              this.setState({ [name]: ''});
            }else{
              this.setState({ [name]: event.target.value.slice(0,1)});  
            }  
          }else if(event.target.value === '00' ){
            this.setState({ [name]: event.target.value.slice(0,1)});
          }else if(Number(event.target.value) > 12){
            this.setState({ [name]: event.target.value.slice(event.target.value.length-2, event.target.value.length-1)});
          }else{
            this.setState({ [name]: event.target.value}); 
          }    
        }else if(event.target.value.length > 2){
          this.setState({ [name]: event.target.value.slice(0,2)}); 
        }
      }else if(name === 'year'){
        this.props.handleDateLabelError('date of birth');
        if(event.target.value.length === 4){          
          if(document.querySelector('#date').value & document.querySelector('#month').value){            
            this.props.handleSelectDateBirth(+new Date(event.target.value, document.getElementById('month').value -1, document.getElementById('date').value));
          }
        }
        if(event.target.value.length <= 4){
          if(event.target.value.match(/^\d+$/) === null){
            this.setState({ [name]: event.target.value.slice(0, event.target.value.length-1)}); 
          }else if(event.target.value === '0'){
            this.setState({ [name]: ''});
          }else{
            this.setState({ [name]: event.target.value}); 
          } 
        }else if(event.target.value.length > 4){
          this.setState({ [name]: event.target.value.slice(0,4)});
        } 
      }

      if(document.getElementById('date').value.length & document.getElementById('month').value.length & document.getElementById('year').value.length){
        if(this.props.gender.length){
          this.props.handleBar('80');
        }else{
          this.props.handleBar('60');
        }
      }    
  }

  render() {

    return (
      <div className="date_birth_wrap">
        <p className={this.props.dateLabel === 'date of birth' ? "birth_title" : "birth_title error"}>{this.props.dateLabel}</p>
        <div className="date_birth_content">
            <input 
              id="date" 
              value={this.state.date} 
              type="text"
              placeholder="DD"
              onChange={this.handleChange('date')}
            />
            <input 
              id="month" 
              value={this.state.month} 
              type="text"
              placeholder="MM"
              onChange={this.handleChange('month')}
            />
            <input 
              id="year" 
              value={this.state.year} 
              type="text"
              placeholder="YYYY"
              onChange={this.handleChange('year')}
            />

        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  dateLabel: state.initState.labels.date,
  gender: state.initState.user_data.gender,
});

function mapDispatchToProps(dispatch) {
  return {
    handleDateLabelError: (data) => dispatch(actions.dateLabelError(data)),
    handleSelectDateBirth: (data) => dispatch(actions.selectDateBirth(data)),
    handleBar: (data) => dispatch(actions.changeProggresBar(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateBirth);