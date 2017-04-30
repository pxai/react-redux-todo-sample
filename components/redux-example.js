//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux ')

// THE STORE
// the createStore argument needs to be a PURE FUNCTION
//  var store = Redux.createStore();
// in this case a reducer: takes your existing state and an action
// and calculates a NEW STATE. It needs to have a default state {name: 'Anonymous'}
// takes two arguments.
// 1. previous state
// 2. the action



var reducer = (state = {name: 'Anonymous'} , action) => {
    //state = state || {name: 'Anonymous'};  // ES5: With this creates an default arg. ES6 default value
    console.log('new action: ', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                    ...state,
                    name: action.name
                };
        default:
            return state;
    }
    return state;
}
var store = redux.createStore(reducer);

var currentState = store.getState(); // It gets the state
console.log('current state', currentState);

// ACTIONS
// In this case we will dispatchActions
// We will define actions, objects with a TYPE property
var action = {
    // Rule of thumb: upper case and underscores
    type: 'CHANGE_NAME',
    name: 'Eugene'  // we passs a namein this action
};
// We dispatch to the store,. Argument: our action
store.dispatch(action);
console.log('current state', store.getState());

