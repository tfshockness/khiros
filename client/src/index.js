import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';

const store = configStore();
ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

