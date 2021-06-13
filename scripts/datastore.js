(function (window) {
    'use strict';
    let App = window.App || {};

    function DataStore() {
        console.log('running the DataStore function');
        this.data = {};
    }

    DataStore.prototype.add = function (obj) {
        this.data[obj.emailAddress] = obj;
    };
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);




