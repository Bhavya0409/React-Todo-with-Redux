var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type:'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        })
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type:'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        })
    })
});