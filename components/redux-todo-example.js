//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux store for ToDo app')

// THE STORE
// the createStore argument needs to be a PURE FUNCTION
//  var store = Redux.createStore();
// in this case a reducer: takes your existing state and an action
// and calculates a NEW STATE. It needs to have a default state {name: 'Anonymous'}
// takes two arguments.
// 1. previous state
// 2. the action
var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
// In this case we just return the default state
var reducer = (state = stateDefault , action) => {
    //state = state || {name: 'Anonymous'};  // ES5: With this creates an default arg. ES6 default value
    return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState(); // It gets the state
console.log('current state for ToDO', currentState);
// Equivalent
console.log('current state for ToDO', store.getState());