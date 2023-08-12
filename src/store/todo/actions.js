import { CREATETODO } from "../counter/types"

export const createTodo = (todo) => ({ type: CREATETODO, payload: todo })
