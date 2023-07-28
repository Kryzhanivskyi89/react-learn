import React, { Component } from 'react';
// import { Card } from './card/Card';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
import Header from './Header/Header';
import ToDoList from './ToDoList/TodoList';

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

    render() {
        return(
        <>
            <Header showModal={this.showModal}/>
            {this.state.isShowModal && <Modal closeModal={this.closeModal}>Some</Modal>}
            {/* {this.state.isShowModal && <Modal closeModal={this.closeModal} />} */}
            {/* <Card /> */}
            {/* <Counter /> */}
            <ToDoList/>
        </>
        )
    }
    
}

export default App