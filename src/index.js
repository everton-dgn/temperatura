import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ClimeProvider } from './context';

ReactDOM.render(
    <React.StrictMode>

        <ClimeProvider>
        <App/>
        </ClimeProvider>

    </React.StrictMode>,
    document.getElementById('root')
);
