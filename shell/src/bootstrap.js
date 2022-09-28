import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { StoreProvider } from 'store/store';
const render = (App) => {
    const root = document.getElementById('root');

    ReactDOMClient.hydrateRoot(
        root,
        <StoreProvider>
            <App />
        </StoreProvider>
    );
};

render(App);
