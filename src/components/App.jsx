import React, { Component } from 'react';
import {nanoid} from 'nanoid'
// import { Card } from './card/Card';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
import Header from './Header/Header';
// import ToDoList from './ToDoList/TodoList';
import FormLogin from './FormLogin/FormLogin';

class App extends Component {

state = {
		isShowModal: false,
	}

    showModal = () => {
        this.setState({isShowModal:true})
    }

    closeModal = () => {
        this.setState({isShowModal:false})
    }

    createUser = (data) => {
        const newUser = {
            ...data,
            id:nanoid()
        }
    }

    render() {
        return(
        <>
            <Header showModal={this.showModal}/>
                {this.state.isShowModal && <Modal closeModal={this.closeModal}>
                    <FormLogin
                        createUser={this.createUser}
                        closeModal={this.closeModal}
                    />
                </Modal>}
            {/* {this.state.isShowModal && <Modal closeModal={this.closeModal} />} */}
            {/* <Card /> */}
            {/* <Counter /> */}
            {/* <ToDoList /> */}
            
        </>
        )
    }
    
}

export default App