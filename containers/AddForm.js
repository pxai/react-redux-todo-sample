import React from 'react';
import Input from './Input';


var AddForm = React.createClass({
    // ES6 Style function declaration
    getInitialState: function() {
        return {
            id: '',
            who: '',
            when: '',
            description: ''
        };
    },

    submitForm (event) {
        event.preventDefault();
        console.log("Time to submit");
    },
    updatedForm(field) {
        console.log('Field was updated');
    },
  render: function () {
          return(<div >{/* We need always a root element */}
              <h1>Add Workorder</h1>
              <form onSubmit={this.submitForm}>
                  <Input label="when" updateForm={this.updatedForm}/>
                  <Input label="description" updateForm={this.updatedForm}/>
                  <Input label="tags" updateForm={this.updatedForm}/>
                  <div className="form-group">
                      <button className="btn btn-success">Add Workorder</button>
                  </div>
              </form>
          </div>);
      }
});

export default AddForm;
