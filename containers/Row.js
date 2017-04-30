import React from 'react';
//import StringMixin from 'StringMixin';

var Row = React.createClass({
   // mixins: [StringMixin],
  render: function () {
          return(<tr className="sampleClass">
              <td>{this.props.cell.id}</td>
              <td>{this.props.cell.who}</td>
              <td>{this.props.cell.when}</td>
              <td>{this.props.cell.description}</td>
                </tr>);
      }
});

export default Row;
