import React from 'react';

var Footer = React.createClass({
    // Shows all lifecycle methods
    componentWillMount: function(){
        console.log('LifeCycle> Component Will Mount');
    },
    componentDidMount: function(){
        console.log('LifeCycle> Component Did Mount');
    },
    getInitialState: function(){
        console.log('LifeCycle> Get Initial State');
        return { status: true}
    },
    getDefaultProps: function(){
        console.log('LifeCycle> Get Default Props');
        return {author: 'Xabier'};
    },
    componentWillReceiveProps: function(nextProps){
        console.log('LifeCycle> Component Will Receive Props');
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('LifeCycle> Should Component Update');
        return true;
    },
    componentWillUpdate: function(){
        console.log('LifeCycle> Component Will Update');
    },
    componentWillUnmount: function(){
        console.log('LifeCycle> Component Will Unmount');
    },
  render: function () {
          return(<footer>
              &copy; {this.props.author} - 2017 {this.state.status}
                </footer>);
      }
});

export default Footer;
