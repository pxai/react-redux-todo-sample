//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux ')

var defaultState = {
    name: 'Anonymous',
    hobbies: [],
    movies: [] // Id, title, Genre
}
var hobbyId = 1;
var movieId = 1;

var oldReducer = (state = defaultState , action) => {
    //state = state || {name: 'Anonymous'};  // ES5: With this creates an default arg. ES6 default value
    console.log('new action: ', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };

        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [// ES6 spread operator!! to add elements to an array
                    ...state.hobbies,
                    {
                        id: hobbyId++,
                        hobby: action.hobby
                    }
                ]
            };

        case 'REMOVE_HOBBY':
            return {
                ...state,
                // we use filter method of arrays, this creates a new array, don't update the state
                // so we have a pure function doing this. // true removes, false, does not and removes from array
                // filters out every element that returns true
                hobbies: state.hobbies.filter(function (hobby) {
                    return hobby.id !== action.id;
                })
                /* // Short version
                 hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
                 */
            };

        case 'ADD_MOVIE':
            return {
                ...state,  // ES6 spread operator!!
                movies: [ // ES6 spread operator!! to add elements to an array
                    ...state.movies,
                    {
                        id: movieId++,
                        ...action.movie
                    }
                ]
            };

        case 'REMOVE_MOVIE':
            return {
                ...state,  // ES6 spread operator!!
                movies: state.movies.filter( (movie) => movie.id !== action.id)
            };

        default:
            return state;
    }
    return state;
}

// In this case, state is just an String
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

// checck it out!! Now it changes only its own state
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                    ...state,
                    {
                        id: hobbyId++,
                        hobby: action.hobby
                    }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }
};
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [ // ES6 spread operator!! to add elements to an array
                    ...state,
                    {
                        id: movieId++,
                        ...action.movie
                    }
                ]
        case 'REMOVE_MOVIE':
            return state.filter( (movie) => movie.id !== action.id);
        default:
            return state;
    }
};
// combineReducers: takes one argument, object, key-value pairs, with
// the objects we want for each reducers
var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});
var store = redux.createStore(reducer);

// We will call this function everytime the store changes:
// subscribe to changes
var unsubscribe = store.subscribe( () => {
    var state = store.getState();

    console.log('Name was changed in store!! ', state);
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

// unsubscribe();  //we can unsuscribe to the store with this, we will not see the next:

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'ANY'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Learning'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Teaching'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Riders of the Lost Ark',
        genre: 'Adventures'
    }
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'The Empire Strikes Back',
        genre: 'Sci-Fi'
    }
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});