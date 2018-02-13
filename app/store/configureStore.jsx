var redux = require('redux');
var thunk = require('redux-thunk').default;
var {searchTextReducer, todosReducer, showCompletedReducer} = require('../reducers/reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        showCompleted: showCompletedReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    return store;
}