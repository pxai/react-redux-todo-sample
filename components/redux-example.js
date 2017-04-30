//import createStore   from 'redux';

var redux = require('redux');

console.log('Starting redux ')




// Name reducer
// In this case, state is just an String
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

// ACTIONS
// we define this action instead of passing alll the object to dispatch
var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name // ES6!! when name: name
    };
};

// Hobbies reducer
var hobbyId = 1;
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

// ACTION functions
var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};
// Movies reducer
var movieId = 1;
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
}

// ACTION functions
var addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie
    }
};
/**
 * // Another way, but have to change the reducer
var addMovie = (title, genre) => {
   return {
    type: 'ADD_MOVIE',
    title.
    genre
   }
};
 */
var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
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

// We dispatch to the store,. Argument: our action
store.dispatch(changeName('Eugene'));
console.log('current state', store.getState());

// unsubscribe();  //we can unsuscribe to the store with this, we will not see the next:

store.dispatch(changeName('Any'));

store.dispatch(addHobby('Learning'));

store.dispatch(addHobby('Teaching'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie({movie: {
                    title: 'Riders of the Lost Ark',
                    genre: 'Adventures'
                }}
             ));

store.dispatch(addMovie({movie: {
        title: 'The Empire Strikes Back',
        genre: 'Sci-Fi'
    }}
));

store.dispatch(removeMovie(1));