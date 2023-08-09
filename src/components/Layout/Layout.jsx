import React, { useState, useId } from 'react';
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { nanoid } from 'nanoid'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'




const Layout = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    

    const showModal = () => setIsShowModal (true)
    
    const closeModal = () => setIsShowModal(false)
    
     function createUser (data) {
        const newUser = {
            ...data,
            id: nanoid(),
        }
    }
    
    

    return (
        <div className='container'>
            <Toaster position='top-right'
				toastOptions={{
					duration: 1500,
				}}/> 
            <Header showModal={showModal}/>
            <Outlet /> 
            {isShowModal &&
                <Modal closeModal={closeModal}>
                     <FormLogin
                        createUser={createUser}
                        closeModal={closeModal}
                    />
                </Modal>}
            {/* Footer */}
        </div>
    )
}

export default Layout