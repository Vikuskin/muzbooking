import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'App';
import { store } from 'store/index';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
