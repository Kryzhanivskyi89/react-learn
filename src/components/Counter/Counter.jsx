import { Component, useReducer, useState } from "react";

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
// useState
    
    // const [total, setTotal] = useState(0)
    // const handleClickPlus = (e) =>
    //     setTotal ((prevTotal)=>prevTotal+1)
    //     // this.setState((prevState) => ({ value: prevState.value + 1 }))
        
    // const handleClickMinus = (e) => {
    //     setTotal ((prevTotal)=>prevTotal-1)
    //     // this.setState((prevState) => {
    //     //     return { value: prevState.value - 1 }
    //     // })
    // }

// useReducer
    const [total, setTotal] = useReducer(reducer, 0,)
    
    const handleClickPlus = (e) => setTotal ({type:'increment', payload:1})
       
    const handleClickMinus = (e) => setTotal({type:'decrement', payload:1})

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

// class Counter extends Component {
//     state = {
//         value:0,
//     }
//     handleClickPlus = (e) => this.setState((prevState) => ({value:prevState.value+1}))
//         // this.setState(({value:3}))
        
//     handleClickMinus = (e) => {
//         this.setState((prevState) => {
//             return { value: prevState.value - 1 }
//         })
//     }

//     handleClickBtn = () => {
//         const { name, count } = this.props
//         const age = count ?? 10
//     }

//     render() {
//         return (
//             <div className='position-absolute top-50 start-50 translate-middle'>
//                 <div
//                     className='card bg-dark text-white '
//                     style={{ width: '600px' }}
//                 >
//                     <div className='card-body'>
//                         <h5 className='card-title text-center fs-1'>Counter</h5>
//                         <p
//                             className='card-text  text-center'
//                             style={{ fontSize: '80px' }}
//                         >
//                             {this.state.value}
//                         </p>
//                         <div className='d-flex justify-content-center px-5'>
//                             {/* <button
//                                 className='btn btn-outline-success me-5'
//                                 onClick={this.handleClickPlus}
//                             >
//                                 <i className='bi bi-plus-circle fs-1'></i>
//                             </button> */}
//                             <Button
//                                 obj={{name:'asd'}}
//                                 handleClickPlus={this.handleClickPlus}
//                             />
//                             <button
//                                 className='btn  btn-outline-danger ms-5'
//                                 onClick={this.handleClickMinus}
//                             >
//                                 <i className='bi bi-dash-circle fs-1'></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Counter;