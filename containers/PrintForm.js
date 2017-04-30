import React from 'react';
import DatePickForm from './DatePickForm';
import PrintScreen from './PrintScreen';


var PrintForm = React.createClass({
    // ES6 Style function declaration
    getInitialState() {
        return ({ step: 0, printFormValues: {} });
    },
    handleNextClick(event){
        event.preventDefault();
        this.stepForward({});
    },
    stepForward (newFormValues) {
        var step = this.state.step + 1;
        step = (step === 3)?0:step;
        var printFormValues = Object.assign({}, this.state.printFormValues, newFormValues)
        this.setState({step: step, printFormValues: printFormValues });
        console.log('Field was updated: ' + this.state.step);
        console.log(printFormValues);
    },
    render: function () {
      switch (this.state.step) {
          case 1:
              return <DatePickForm  stepForward={this.stepForward} />;
          case 2:
              return <PrintScreen stepForward={this.stepForward} />;
           default:
               return(
                   <div >{/* We need always a root element */}
                       <button className="btn btn-success" onClick={this.handleNextClick}>Start Print Wizard</button>
                   </div>);
         }
      }
});

export default PrintForm;
