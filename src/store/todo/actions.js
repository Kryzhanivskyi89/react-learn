import { createAction, nanoid } from "@reduxjs/toolkit"
// import { CREATETODO } from "../counter/types"

// export const createTodo = (todo) => ({ type: CREATETODO, payload: todo })

export const createTodo = createAction('CREATETODO', (value) => {
    return {
        payload: {id: nanoid(), title: value, completed: false}
    }
})