import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import {
    StoreProvider,
    useStore,
    useAppDispatch,
    useAppSelector,
} from 'store/store';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/layouts/MainLayout';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ThemeWrapper = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Wrapper />
        </ThemeProvider>
    );
};
const Wrapper = () => {
    const { imgSrc, sales, salesActions } = useStore();
    //console.log('imgSrc:', imgSrc);
    console.log('salesData:', sales, salesActions);

    return <MainLayout />;
};

const App = () => (
    <StoreProvider>
        <ThemeWrapper />
    </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
