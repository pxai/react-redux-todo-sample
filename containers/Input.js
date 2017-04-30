import React from 'react';

var Input = React.createClass({
    getInitialState: function() {
        return {
            value: '',
        };
    },
    handleChange(event) {
        this.props.updateForm(this.props.label);
        this.setState({ value: event.target.value });
        console.log('['+this.props.label+'] Changed state to: ' + this.state.value);
        this.props.updateForm(this.props.label);
    },

  render: function () {
          return(<div className="form-group">
                  <label htmlFor={this.props.label}>{this.props.label}</label>
                  <input type="text" className="form-control" value={this.state.value} id="{this.props.label}" onChange={this.handleChange}/>
              </div>);
      }
});

export default Input;
