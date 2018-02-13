var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');

var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store = {store}>
        <TodoApp/>
    </Provider>,
  document.getElementById('app')
);

require('./redux-example.jsx');
