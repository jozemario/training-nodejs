import React from 'react';

//import { getProductById } from "../lib/products";

export default {
    loader: async ({ params }) => {
        return {
            product: {}, // getProductById(params.id),
        };
    },
    element: () => import('./Pdp').then((module) => <module.default />),
};
