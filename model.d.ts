export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
export declare enum TodoState {
    active = 1,
    complete = 2
}
