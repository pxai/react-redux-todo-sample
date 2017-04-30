import React from 'react';


var DatePickForm = React.createClass({
    getInitialState() {
        return ({errors: [], dateFrom: '', dateTo: '' });
    },
    validateForm () {
      var errors = [];
        this.setState({errors: errors});
        console.log(this.state);
      if (this.state.dateFrom === '') {
          console.log('Error in date From');
          errors.push('Error in date From field');
      } else if (this.state.dateTo === '') {
          console.log('Error in date To');
          errors.push('Error is date To field');
      } else {
          console.log('Form ok!');
          this.setState({errors:[]})
          return true;
      }

      this.setState({errors: errors});
      return false;
    },
    handleChange(event, field) {
        var fieldNewState = this.state;
        fieldNewState[field] = event.target.value;
        this.setState(fieldNewState);
        console.log('Changed ' + field + ' :' + event.target.value);
    },
    handleNextClick(event) {
        event.preventDefault();
        if (this.validateForm()) {
            this.props.stepForward({dateFrom: this.state.dateFrom, dateTo: this.state.dateTo});
        }
        console.log('Field was updated: ');
    },
    render() {
        return(<form>
            <div className="form-group">{/* We need always a root element */}
                <label htmlFor="from">From</label>
                <input type="date" onChange={(event) => this.handleChange(event,
                    'dateFrom')} className="form-control"/>
            </div>
            <div className="form-group">{/* We need always a root element */}
                <label htmlFor="to">To</label>
                <input type="date" onChange={(event) => this.handleChange(event,
                    'dateTo')} className="form-control"/>
            </div>
            <button className="btn btn-success" onClick={this.handleNextClick}>Pick Workoders</button>
        </form>);
    }
});

export default DatePickForm;
