import { Component, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import ToDo from '../Todo/ToDo'
import todo from '../../todo.json'
import FormToDo from '../FormToDo/FormToDo'
import FormFilterTodo from '../FormToDo/FormFilterTodo';
import { createTodo } from '../../store/todo/actions';
import { useDispatch } from 'react-redux';


const ToDoList = () => {

    // const [todoList, setTodoList] = useState('')
    
    const {todo:todoList } = useSelector ((state)=>state.todo)
    
    const dispatch = useDispatch()

    const [filteredTodoList, setFilteredTodoList] = useState(null)
    
    const [searchParams, setSearchParams] = useSearchParams()

    const filterText = searchParams.get('filter') ?? '' /* якщо нічо не введено значить null, тоді все ламається. Потрібно або пустий рядок*/
    

    // useEffect(() => {
    //     const localTodo = localStorage.getItem('todo')
    //     if (localTodo) setTodoList(JSON.parse(localTodo))
    // }, [])

    // useEffect(() => {
    //     todoList && localStorage.setItem('todo', JSON.stringify(todoList)) /* перевірка, щоб не було першого рендера  */
    // }, [todoList])
    
    useEffect(() => {
        todoList &&
            setFilteredTodoList(
                todoList.filter((todo) =>
                    todo.title.toLowerCase().includes(filterText.trim().toLowerCase())
            )
        )
    }, [filterText, searchParams, todoList])
    


    const addToDo = (value) => {
        // setTodoList((prevTodoList) => {
        //     return [
        //         ...prevTodoList,
        //         {id: nanoid(), title: value, completed: false},
        //     ]
        // })
        dispatch(createTodo(value))
        toast.success ('Create successfully')
    }

    const handleCheckCompleted = (id) => {
        // setTodoList((prevTodoList) => {
        //     return prevTodoList.map((todo) =>
        //         todo.id === id
        //             ? { ...todo, completed: !todo.completed }
        //             : todo)
        // })
    }

    const handleDelete = (id) => {
        // setTodoList((prevTodoList) => {
        //     return prevTodoList.filter(todo => todo.id !== id)
        // })
        toast.error ('Delete successfully')    
    }

    return (
        <>
            <h1>My To-Do list</h1>
            <FormFilterTodo setSearchParams={setSearchParams} filterText={filterText} />
            <FormToDo addToDo={addToDo } />
               {filteredTodoList && (
                    <ul className='list-group list-group-flush'>
                        {filteredTodoList.map((todo) => (
                            <ToDo
                                key={todo.id}
                                todo={todo}
                                handleCheckCompleted={handleCheckCompleted}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </ul>
                )}    
                
        </>
    )
}


// class ToDoList extends Component {

//     state = {
//         todoList: '',
//         isDelete: false,
//         isCreate: false,
//     }

//     componentDidMount() { 
//         // localStorage.setItem('todo', JSON.stringify(todo))
//         if (localStorage.getItem('todo'))
//             this.setState({
//                 todoList: JSON.parse(localStorage.getItem('todo'))
//             })
           
//     }

//     componentDidUpdate(_, prevState) {
//         if (prevState.todoList.length > this.state.todoList.length) {  /* зміна довжини списку */
//             localStorage.setItem('todo', JSON.stringify(this.state.todoList))  /* обновляємо  ocalStorage*/
//             this.setState({
//                 isDelete: true,   /* викликає зміну стейту */
//                 todo: localStorage.getItem('todo')
//             })    
//             setTimeout(() => {     /* через */
//                   this.setState({isDelete:false}) 
//             }, 2000);     /* 2 сек */
//         }
//         if (prevState.todoList.length < this.state.todoList.length) {
//             localStorage.setItem('todo', JSON.stringify(this.state.todoList))
//             this.setState({
//                 isCreate: true,
//                 todo: localStorage.getItem('todo')
//             })
//             setTimeout(() => {
//                   this.setState({isCreate:false})
//             }, 2000);
//         }
//     }   
        
//     addToDo = (value) => {
//         this.setState((prev) => {
//             return {
//                 todoList: [
//                     ...prev.todoList,
//                     {id: nanoid(), title: value, completed: false
//                     },
//                 ],
//             }
//         })
//     }

//     handleCheckCompleted = ( id) => {
//         this.setState((prevState) => ({
//             todoList: prevState.todoList.map((todo) =>
//                 todo.id === id ? { ...todo, completed: !todo.completed }:todo)
//         }))
//     }

//     handleDelete = (id) => {
//         this.setState((prev) => {
//             return {
//                 todoList: prev.todoList.filter(todo => todo.id !== id)
//             }
//         })
//     }

//     render() {
//         return (
//             <>
//                 <h1>My To-Do list</h1>
//                 {this.state.isDelete && (
//                     <div className="alert alert-danger" role="alert">
//                         To-do delete successfully
//                     </div>
//                 )}
//                 {this.state.isCreate && (
//                     <div className="alert alert-success" role="alert">
//                         To-do create successfully
//                     </div>
//                 )}
//                 <FormToDo addToDo={this.addToDo } />
                
//                 {this.state.todoList && (
//                     <ul className='list-group list-group-flush'>
//                         {this.state.todoList.map((todo) => (
//                             <ToDo
//                                 key={todo.id}
//                                 todo={todo}
//                                 handleCheckCompleted={this.handleCheckCompleted}
//                                 handleDelete={this.handleDelete} />
//                         ))}
//                     </ul>
//                 )}    
                
//             </>
            
//         )
        
//     }
// }

export default ToDoList