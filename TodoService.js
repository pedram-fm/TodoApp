System.register(["./model"], function (exports_1, context_1) {
    "use strict";
    var model_1, _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return _lastId += 1;
    }
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    return {
        setters: [
            function (model_1_1) {
                model_1 = model_1_1;
            }
        ],
        execute: function () {
            _lastId = 0;
            TodoService = /** @class */ (function () {
                function TodoService(todos) {
                    var _this = this;
                    this.todos = [];
                    if (todos) {
                        todos.forEach(function (todo) { return _this.add(todo); });
                    }
                }
                TodoService.prototype.add = function (input) {
                    var todo = {
                        id: generateTodoId(),
                        name: null,
                        state: model_1.TodoState.active
                    };
                    if (typeof input === 'string') {
                        todo.name = input;
                    }
                    else if (typeof input.name === 'string') {
                        todo.name = input.name;
                    }
                    else {
                        throw 'invalid todo name';
                    }
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.clearCompleted = function () {
                    this.todos = this.todos.filter(function (x) { return x.state == model_1.TodoState.active; });
                };
                TodoService.prototype.getAll = function () {
                    return clone(this.todos);
                };
                TodoService.prototype.getById = function (todoId) {
                    var todo = this._find(todoId);
                    return clone(todo);
                };
                TodoService.prototype._find = function (todoId) {
                    var filtered = this.todos.filter(function (x) { return x.id == todoId; });
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                };
                TodoService.prototype.toggle = function (todoId) {
                    var todo = this._find(todoId);
                    switch (todo.state) {
                        case model_1.TodoState.active: {
                            todo.state = model_1.TodoState.complete;
                            break;
                        }
                        case model_1.TodoState.complete: {
                            todo.state = model_1.TodoState.active;
                            break;
                        }
                    }
                };
                TodoService._lastId = 0;
                return TodoService;
            }());
            exports_1("default", TodoService);
        }
    };
});
