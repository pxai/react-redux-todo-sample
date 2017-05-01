//import createStore   from 'redux';

var redux = require('redux');
import jQuery from '../public/js/jquery.min';

console.log('Starting redux ')

var actions = require('./../actions/index');
var store = require('./../store/configureStore').configure();
var reducers = require('./../reducers/index');

// We will call this function everytime the store changes:
// subscribe to changes
var unsubscribe = store.subscribe( () => {
    var state = store.getState();

    console.log('Name was changed in store!! ', state);
    if (state.remoteApi.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.remoteApi.url) {
        document.getElementById('app').innerHTML = 'Data loaded';
    }
});

var currentState = store.getState(); // It gets the state
console.log('current state', currentState);



// ACTIONS
// In this case we will dispatchActions
// We will define actions, objects with a TYPE property
store.dispatch(actions.fetchRemoteApiData());

// We dispatch to the store,. Argument: our action
store.dispatch(actions.changeName('Eugene'));
console.log('current state', store.getState());

// unsubscribe();  //we can unsuscribe to the store with this, we will not see the next:

store.dispatch(actions.changeName('Any'));

store.dispatch(actions.addHobby('Learning'));

store.dispatch(actions.addHobby('Teaching'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie({movie: {
                    title: 'Riders of the Lost Ark',
                    genre: 'Adventures'
                }}
             ));

store.dispatch(actions.addMovie({movie: {
        title: 'The Empire Strikes Back',
        genre: 'Sci-Fi'
    }}
));

store.dispatch(actions.removeMovie(1));