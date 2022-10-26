import React from 'react';
//import { getProducts } from '../../../schemas/products.schema';

export default {
    loader: async () => {
        return {
            products: [], //await getProducts(),
        };
    },
    element: () => import('./Dashboard').then((module) => <module.default />),
};
