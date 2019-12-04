import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from 'components/App/App';
import store from 'store';

const root = <Provider store={store}>
    <App />
</Provider>
ReactDOM.render(root, document.getElementById('root'));


