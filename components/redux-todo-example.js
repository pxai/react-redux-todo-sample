//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux store for ToDo app')

// THE STORE

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault , action) => {
    //state = state || stateDefault;  // ES5: With this creates an default arg. ES6 default value
    console.log('Incoming action: ', action);
    switch (action) {
        case 'CHANGE_SEARCH':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
}

var store = redux.createStore(reducer);

var currentState = store.getState(); // It gets the state
console.log('current state for ToDO', currentState);
// Equivalent
console.log('current state for ToDO', store.getState());

var action = {
    // Rule of thumb: upper case and underscores
    type: 'CHANGE_SEARCH',
    name: 'Default search...'  // we passs a namein this action
};
// We dispatch to the store,. Argument: our action
store.dispatch(action);
console.log('current state for ToDo', store.getState());