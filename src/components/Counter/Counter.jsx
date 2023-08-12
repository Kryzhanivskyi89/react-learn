import { Component, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { decrement } from "../../store/counter/actions";
import { increment, decrement } from "../../store/counter/counterSlice";

class Button extends Component  {
    
    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.handleClickPlus === this.props.handleClickPlus && 
            nextProps.obj.name === this.props.obj.name   /* така перевірка робиться якщо в обєкті потрібно перевірити один ключ */
            )
            return false
        return true
    }

    render() { 
        return (
            <button
                className='btn btn-outline-success me-5'
                onClick={this.props.handleClickPlus}
            >
                <i className='bi bi-plus-circle fs-1'></i>
            </button>
        );
    }
}

function reducer(prevState, action) {
    if (action.type === 'increment')
        return prevState + action.payload
    else return prevState - action.payload
}

const Counter = () => {

    // const [total, setTotal] = useReducer(reducer, 0,)

    const { total, step } = useSelector((state) => state.counter)  /* selector redux */
   
    
    const dispatch = useDispatch()
    
    const handleClickPlus = (e) => dispatch (increment(step))
       
    const handleClickMinus = (e) => dispatch(decrement (step))

    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
                <div
                    className='card bg-dark text-white '
                    style={{ width: '600px' }}
                >
                    <div className='card-body'>
                        <h5 className='card-title text-center fs-1'>Counter</h5>
                        <p
                            className='card-text  text-center'
                            style={{ fontSize: '80px' }}
                        >
                            {total}
                        </p>
                        <div className='d-flex justify-content-center px-5'>
                            {/* <button
                                className='btn btn-outline-success me-5'
                                onClick={this.handleClickPlus}
                            >
                                <i className='bi bi-plus-circle fs-1'></i>
                            </button> */}
                            <Button
                                obj={{name:'asd'}}
                                handleClickPlus={handleClickPlus}
                            />
                            <button
                                className='btn  btn-outline-danger ms-5'
                                onClick={handleClickMinus}
                            >
                                <i className='bi bi-dash-circle fs-1'></i>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Counter;