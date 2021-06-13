(function (window) {
    'use strict';
    let FORM_SELECTOR = '[data-coffee-order="form"]';
    let CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    let checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
})(window);


