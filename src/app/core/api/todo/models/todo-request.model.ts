import { Todo } from "./todo-data.model";

export interface ITodoByIdRequest {
    id: string;
}


export type IInsertTodoRequest = Todo;
