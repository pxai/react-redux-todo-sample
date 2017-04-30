import React from 'react';

var Heading = React.createClass({
  render: function () {
          return (<th>{this.props.heading}</th>);
      }
});

export default Heading;
