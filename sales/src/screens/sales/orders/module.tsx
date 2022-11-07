import React from 'react';
//import { getProducts } from '../../../schemas/products.schema';
import { getProductsXLSX } from '../../../schemas/products';

export default {
    loader: async () => {
        return {
            products: await getProductsXLSX(),
        };
    },
    element: () => import('./Orders').then((module) => <module.default />),
};
