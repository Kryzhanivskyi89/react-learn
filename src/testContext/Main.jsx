// import { useContext } from 'react';
// import { Context } from "./App"
import { useCustomContex } from '../testContext/Context/Context'

// import { useCustomContex } from './Context/Context'
const Main = () => {
	const context = useCustomContex()
    // const context = useContext(Context)

	return (
		<div>
			<h1>Hello Context</h1>
			<button
				onClick={() => context.toggle(!context.toggleValue)}
				className='btn btn-success'
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main
