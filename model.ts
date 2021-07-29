export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

export enum TodoState {
    active = 1,
    complete = 2
}