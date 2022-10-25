import { createSlice } from '@reduxjs/toolkit';

export const salesSlice = createSlice({
    name: 'sales',
    initialState: {
        users: {
            items: [
                { id: 1, name: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        vendors: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        customers: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        products: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        invoices: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        orders: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
    },
    reducers: {
        add: (state) => {
            state.users.items.push({ id: 6, label: 'Next' });
        },
        reset: (state) => {
            state.users.items = [];
            state.users.count = 0;
        },
    },
});
