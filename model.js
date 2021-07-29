System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoState;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (TodoState) {
                TodoState[TodoState["active"] = 1] = "active";
                TodoState[TodoState["complete"] = 2] = "complete";
            })(TodoState || (TodoState = {}));
            exports_1("TodoState", TodoState);
        }
    };
});
