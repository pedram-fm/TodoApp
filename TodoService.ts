import{ Todo , TodoState } from './model';

export interface ITodoService {
    add(todo: Todo): Todo;

    add(todo: string): Todo;

    clearCompleted(): void;

    getAll(): Todo[];

    getById(todoId: number): Todo;

    toggle(todoId: number): void;
}

let _lastId = 0;

function generateTodoId(): number {
    return _lastId += 1;
}

function clone<T>(src: T): T {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
}

export default class TodoService implements ITodoService {

    private static _lastId = 0;
    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if (todos) {
            todos.forEach(todo => this.add(todo))
        }
    }

    add(todo: Todo): Todo;
    add(todo: string): Todo
    add(input): Todo {
        var todo: Todo = {
            id:generateTodoId(),
            name: null,
            state: TodoState.active
        };
        if (typeof input === 'string') {
            todo.name = input;
        } else if (typeof input.name === 'string') {
            todo.name = input.name;
        } else {
            throw 'invalid todo name'
        }
        this.todos.push(todo);
        return todo;
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(x => x.state == TodoState.active);
    }

    getAll(): Todo[] {
        return clone(this.todos);
    }

    getById(todoId: number): Todo {
        var todo = this._find(todoId);
        return clone(todo);
    }

    private _find(todoId: number): Todo {
        var filtered = this.todos.filter(x => x.id == todoId);
        if (filtered.length) {
            return filtered[0]
        }
        return null;
    }

    toggle(todoId: number): void {
        var todo = this._find(todoId);

        switch (todo.state) {

            case TodoState.active: {
                todo.state = TodoState.complete;
                break;
            }
            case TodoState.complete: {
                todo.state = TodoState.active;
                break;
            }

        }

    }
}