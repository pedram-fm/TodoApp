export declare class TodoApp {
    private todoService;
    private todoList;
    constructor(el: any, todos: any);
    addTodo(TodoName: any): void;
    clearCompleted(): void;
    toggleTodoState(todoId: any): void;
    renderTodos(): void;
    initialize(el: any): void;
}
