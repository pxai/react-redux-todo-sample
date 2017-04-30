import React from 'react';
import Heading from './Heading';

var Headings = React.createClass({
    render: function() {
        var style= { backgroundColor: 'lightBlue',
                     textAlign: 'center',
                     fontSize: '1.2em' };
        var headings=this.props.headings.map(function(name, index) {
                return <Heading key={index} heading={name} />;
        });
        return (<thead style={style}><tr>{headings}</tr></thead>);
    }
});

export default Headings;