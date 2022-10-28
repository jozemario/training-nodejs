import React from 'react';
//import { getProducts } from '../../../schemas/products.schema';

export default {
    loader: async () => {
        return {
            products: [], //await getProducts(),
        };
    },
    element: () => import('./Products').then((module) => <module.default />),
};
