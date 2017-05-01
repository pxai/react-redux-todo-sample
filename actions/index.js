// ACTIONS
// we define this action instead of passing alll the object to dispatch
export var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name // ES6!! when name: name
    };
};

// WAYS TO EXPORT
/*
module.exports = {
    changeName : changeName
}
 */
// ES6 export: do it as you go!!
// export var changeName

// ACTION functions
export var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
export var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};


// ACTION functions
export var addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        movie
    }
};
/**
 * // Another way, but have to change the reducer
 export  var addMovie = (title, genre) => {
   return {
    type: 'ADD_MOVIE',
    title.
    genre
   }
};
 */
export  var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};

// ACTIONS
var startRemoteApiFetch = () => {
    return {
        type: 'START_API_FETCH'
    }
};
export var completeRemoteApiFetch = (url) => {
    return {
        type: 'COMPLETE_API_FETCH',
        url
    }
};

// This is where THUNK comes into play
// fetchRemoteApiData :This requires data from remote API
export var fetchRemoteApiData = () => {
    // HOW TO ACCESS store from a actions file?
    // With redux-thunk middleware!!!
    // We make this function to return something like an object like the orhters
    return (dispatch, getState) => {
        dispatch(startRemoteApiFetch()); // We start the fetch

        jQuery.ajax({
            url: '/api/data.json',
            context: this,
            dataType: 'json',
            type: 'GET'
        }).done(function (data) {
            dispatch(completeRemoteApiFetch('Ok, data fetched ' + data.length));
        });
    };
};