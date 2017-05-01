




// Name reducer
// In this case, state is just an String
export var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};


// Hobbies reducer
var hobbyId = 1;
// checck it out!! Now it changes only its own state
export var hobbiesReducer = (state = [], action) => {
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


// Movies reducer
var movieId = 1;
export var moviesReducer = (state = [], action) => {
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



// remoteApiReducer. ASYNCHRONOUS call to a remote API
export var remoteApiReducer = (state = {isFetching: false, url: undefined}, action) => {
    switch (action.type) {
        case 'START_API_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_API_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};


