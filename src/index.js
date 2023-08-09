import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Context from './testContext/Context/Context';

// import App from './testContext/App'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const div = React.createElement('div');

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
)

// root.render(<React.StrictMode></React.StrictMode>
// );

