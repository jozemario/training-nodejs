import React from 'react';
import { getProducts } from '../../schemas/products.schema';

export default {
    loader: async () => {
        return {
            products: [], //await getProducts(),
        };
    },
    element: () => import('./Home').then((module) => <module.default />),
};
