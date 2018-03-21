import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';

if (process.env.NODE_ENV === 'development') {
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)
  };

const store = configStore();
ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

