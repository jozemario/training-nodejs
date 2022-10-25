import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        menuItems: [
            { id: 1, label: 'Home' },
            { id: 2, label: 'Features' },
            { id: 3, label: 'Contact' },
            { id: 4, label: 'About' },
            { id: 5, label: 'Content' },
        ],
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
