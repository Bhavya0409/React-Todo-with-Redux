import * as redux from 'redux';
import thunk from 'redux-thunk'
import {searchTextReducer, todosReducer, showCompletedReducer} from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        showCompleted: showCompletedReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
    ));

    return store;
};