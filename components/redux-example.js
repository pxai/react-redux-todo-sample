//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux ')


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

// We will call this function everytime the store changes:
// subscribe to changes
var unsubscribe = store.subscribe( () => {
   var state = store.getState();

   console.log('Name was changed in store!! ', state.name);
});

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

unsubscribe();  //we can unsuscribe to the store with this, we will not see the next:

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'ANY'
});