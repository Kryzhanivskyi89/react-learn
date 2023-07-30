import React, { Component } from 'react';

class Modal extends Component {
	state = {} 
	
	componentDidMount() { 
		window.addEventListener('keydown', this.handlePresESC)  /* вішаємо слухача */
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handlePresESC)  /* знімаємо слухача */
	}

	handlePresESC = ( e ) => {    
		if (e.code === "Escape") /* при кліку на escape */
		this.props.closeModal()   /* викликається closeModal */
	}

	render() { 
		const {children, closeModal} = this.props
		return (<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={closeModal}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>);
	}
}
 
export default Modal;

// const Modal =({children, closeModal}) => {

// 	return (
		
// 	)
	
// }

// export default Modal