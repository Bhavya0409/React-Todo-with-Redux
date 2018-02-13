var moment = require('moment');

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
    var state = store.getState();

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = "Loading...";
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = "<a target='_blank' href='" + state.map.url + "'>View Your Location</a>";
    }
});

// store.dispatch(actions.fetchLocation());
//
// store.dispatch(actions.changeSearchText('dog'));
// store.dispatch(actions.addTodo({
//     id: 1,
//     text: 'TEST',
//     completed: false,
//     createdAt: moment().unix(),
//     completedAt: undefined
// }))
// store.dispatch(actions.addTodo({
//     id: 2,
//     text: 'NEW',
//     completed: false,
//     createdAt: moment().unix(),
//     completedAt: undefined
// }))
// store.dispatch(actions.removeTodo(2));
// store.dispatch(actions.changeSearchText('cat'));