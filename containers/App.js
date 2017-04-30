/*import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SocialTracker from '../components/SocialTracker'
import * as SocialActions from '../actions/social'

function mapStateToProps(state) {
  return {
    social: state.social
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SocialActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialTracker)*/
import React from 'react';
import WorkorderTable from './WorkorderTable';
import Headings from './Headings';
import Rows from './Rows';
import jQuery from '../public/js/jquery.min';

var initialData = [{
    "id" : "1",
    "who": "2",
    "when": "2017-04-10",
    "description": "Installed React"
},
    {
        "id" : "2",
        "who": "2",
        "when": "2017-04-11",
        "description": "Installed Everything required."
    },
    {
        "id" : "3",
        "who": "2",
        "when": "2017-04-12",
        "description": "Trying all elements"
    },
    {
        "id" : "4",
        "who": "2",
        "when": "2017-04-15",
        "description": "Grabbed from the net"
    }];

var App = React.createClass({
    // Set defaults properties
    getDefaultProps: function() {
        return {
            title: 'Workorders App v3.0.1',
            headings: ['Id','Who','When','Description'],
            author: 'Pello Altadill'
        };
    },
    getInitialState: function() {
        return {
            data: initialData
        };
    },
    // Property validation. When errors, just warns on console
    propTypes: {
        title: React.PropTypes.string.isRequired,
        headings: React.PropTypes.array,
        data: React.PropTypes.array,
        author: function(props, propName, componentName) {
            if(propName === 'author' && props.author.length < 3)
                return Error('Failed Validation, must be longer thant 2');
        }
    },
    componentDidMount: function (){
        jQuery.ajax({
            url: 'api/data.json',
            context: this,
            dataType: 'json',
            type: 'GET'
        }).done(function (apiData) {
            return this.setState({data: apiData});
        });
    },
    render: function(){

        return(
            <WorkorderTable title={this.props.title ? this.props.title : 'Super Orders App'} author={this.props.author} >
              <Headings headings={this.props.headings} />
              <Rows data={this.state.data ? this.state.data : this.props.data} />
            </WorkorderTable>
        );
    }
});

export default App;

