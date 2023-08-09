import React, { Component, useState, useId } from 'react';
import { nanoid } from 'nanoid'
import { Toaster } from 'react-hot-toast';
// import { Card } from './card/Card';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
import Header from './Header/Header';
// import ToDoList from './ToDoList/TodoList';
import FormLogin from './FormLogin/FormLogin';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';
// import TestUseMemo from './TestUseMemo/TestUseMemo';


const App = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [searchText, setSearchText] = useState('')
    // const id = useId()
    
    const showModal = () => setIsShowModal (true)
    
    const closeModal = () => setIsShowModal (false)
    
    function createUser (data) {
        const newUser = {
            ...data,
            id: nanoid(),
        }
    }

    const handleSearch = (searchText) => {
        setSearchText (searchText)
    }

    return (
        <div className='container'>
            <Toaster position='top-right'
				toastOptions={{
					duration: 1500,
				}}/> 
            <Header showModal={showModal}/>
            <Search handleSearch={handleSearch} />
            <ContentInfo searchText={searchText} />
            {/* <ToDoList /> */}
            {isShowModal &&
                <Modal closeModal={closeModal}>
                     <FormLogin
                        createUser={createUser}
                        closeModal={closeModal}
                    />
                </Modal>}
            {/* <Counter /> */}
            {/* <TestUseMemo/> */}
            {/* <Card /> */}
      </div>
    
    )
}



// class App extends Component {

// state = {
//     isShowModal: false,
//     searchText: '',
// }
   
//     showModal = () => {
//         this.setState({isShowModal:true})
//     }

//     closeModal = () => {
//         this.setState({isShowModal:false})
//     }

//     createUser = (data) => {
//         const newUser = {
//             ...data,
//             id:nanoid()
//         }
//     }

//     handleSearch = (searchText) => {
//         this.setState({searchText})
//     }

//     render() {
//         return(
//         <>
//             <Header showModal={this.showModal}/>
//             <Search handleSearch={this.handleSearch} />
//             <ContentInfo searchText={this.state.searchText} />
//                 {this.state.isShowModal && <Modal closeModal={this.closeModal}>
//                     <FormLogin
//                         createUser={this.createUser}
//                         closeModal={this.closeModal}
//                     />
//                 </Modal>}
//             {/* {this.state.isShowModal && <Modal closeModal={this.closeModal} />} */}
//             {/* <Card /> */}
//             {/* <Counter /> */}
//             <ToDoList />
            
//         </>
//         )
//     }
    
// }

export default App