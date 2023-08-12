import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter} from 'react-router-dom';
import './index.css';

import App from './components/App';
import Context from './testContext/Context/Context';
import { store } from './store/store'

// import App from './testContext/App'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const div = React.createElement('div');

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Context>
                <App />
            </Context>
        </Provider>   
    </BrowserRouter>
)

// root.render(<React.StrictMode></React.StrictMode>
// );

