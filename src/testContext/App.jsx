// import React, {useState} from 'react'
import Alert from './Alert'
import Context from './Context/Context'
import Main from './Main'

// export const Context = React.createContext()

const App = () => {
    // const [toggleAlert, setToggleAlert] = useState(false)
	return (
        // <Context.Provider value={{ toggleValue: toggleAlert, toggle: setToggleAlert,}}>
        <Context>
            <div className='container pt-2'>
				<Alert />
				<Main />
			</div>
        </Context>
			
		// </Context.Provider>
	)
}

export default App