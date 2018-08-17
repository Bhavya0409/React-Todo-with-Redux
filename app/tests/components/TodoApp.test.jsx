var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
import TodoList from 'TodoList';

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should have Todo App as a title', () => {
      var store = configureStore.configure();
      var provider = TestUtils.renderIntoDocument(
          <Provider store = {store}>
              <TodoApp/>
          </Provider>
      );

      var $el = $(ReactDOM.findDOMNode(provider));
      expect($el.find('.page-title').text()).toBe('Todo App Test');
  })

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
        <Provider store = {store}>
          <TodoApp/>
        </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
