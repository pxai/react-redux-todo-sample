var redux = require('redux');
var thunk = require('redux-thunk');
var {nameReducer, hobbiesReducer, moviesReducer, remoteApiReducer} = require('./../reducers/index');

// This is a way to do it, exporting a configure function
export var configure = () => {
    // combineReducers: takes one argument, object, key-value pairs, with
    // the objects we want for each reducers
    var reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        remoteApi: remoteApiReducer
    });

    var store = redux.createStore(reducer, redux.compose (
        redux.applyMiddleware(thunk), // With this, we can make an action to work as a function
        window.devToolsExtension ? windows.devToolsExtension() : f => f
    ));

    return store;
}