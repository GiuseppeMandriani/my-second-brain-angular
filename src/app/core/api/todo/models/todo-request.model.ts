import { Todo } from "./todo-data.model";

export interface ITodoByIdRequest {
    id: string;
}
export interface ITodoUpdateRequest extends Todo {}


export type IInsertTodoRequest = Todo;
