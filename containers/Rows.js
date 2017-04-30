import React from 'react';
import Row from './Row';

var Rows = React.createClass({
    render: function() {
        var rows=this.props.data.map(function(singleData, index) {
            return(<Row key={index} cell={singleData} />);
        });
        return (<tbody>{rows}</tbody>);
    }
});

export default Rows;