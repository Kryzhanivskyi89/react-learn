import { Component } from 'react'
import { nanoid } from 'nanoid'
import ToDo from '../Todo/ToDo'
import todo from '../../todo.json'
import FormToDo from '../FormToDo/FormToDo'

class ToDoList extends Component {

    state = {
        todoList: '',
        isDelete: false,
        isCreate: false,
    }

    componentDidMount() { 
        // localStorage.setItem('todo', JSON.stringify(todo))
        if (localStorage.getItem('todo'))
            this.setState({
                todoList: JSON.parse(localStorage.getItem('todo'))
            })
           
    }

    componentDidUpdate(_, prevState) {
        if (prevState.todoList.length > this.state.todoList.length) {  /* зміна довжини списку */
            localStorage.setItem('todo', JSON.stringify(this.state.todoList))  /* обновляємо  ocalStorage*/
            this.setState({
                isDelete: true,   /* викликає зміну стейту */
                todo: localStorage.getItem('todo')
            })    
            setTimeout(() => {     /* через */
                  this.setState({isDelete:false}) 
            }, 2000);     /* 2 сек */
        }
        if (prevState.todoList.length < this.state.todoList.length) {
            localStorage.setItem('todo', JSON.stringify(this.state.todoList))
            this.setState({
                isCreate: true,
                todo: localStorage.getItem('todo')
            })
            setTimeout(() => {
                  this.setState({isCreate:false})
            }, 2000);
        }
    }   
        
    addToDo = (value) => {
        this.setState((prev) => {
            return {
                todoList: [
                    ...prev.todoList,
                    {id: nanoid(), title: value, completed: false
                    },
                ],
            }
        })
    }

    handleCheckCompleted = ( id) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed }:todo)
        }))
    }

    handleDelete = (id) => {
        this.setState((prev) => {
            return {
                todoList: prev.todoList.filter(todo => todo.id !== id)
            }
        })
    }

    render() {
        return (
            <>
                <h1>My To-Do list</h1>
                {this.state.isDelete && (
                    <div className="alert alert-danger" role="alert">
                        To-do delete successfully
                    </div>
                )}
                {this.state.isCreate && (
                    <div className="alert alert-success" role="alert">
                        To-do create successfully
                    </div>
                )}
                <FormToDo addToDo={this.addToDo } />
                
                {this.state.todoList && (
                    <ul className='list-group list-group-flush'>
                        {this.state.todoList.map((todo) => (
                            <ToDo
                                key={todo.id}
                                todo={todo}
                                handleCheckCompleted={this.handleCheckCompleted}
                                handleDelete={this.handleDelete} />
                        ))}
                    </ul>
                )}    
                
            </>
            
        )
        
    }
}

export default ToDoList