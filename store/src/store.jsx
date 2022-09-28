import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        imgSrc: 'https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/8567/thumb_code_write_brackets_hand_open_720.jpg',
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        clear: (state) => {
            state.count = 0;
        },
    },
});

const { increment, clear } = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export function useStore() {
    const count = useSelector((state) => state.counter.count);
    const imgSrc = useSelector((state) => state.counter.imgSrc);
    const dispatch = useDispatch();
    return {
        imgSrc,
        count,
        increment: () => dispatch(increment()),
        clear: () => dispatch(clear()),
    };
}

export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
