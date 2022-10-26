import React from 'react';
import { Route, ReactLocation, MakeGenerics } from 'react-location';
import { Product } from './schemas/products.schema';

export const routes: Route[] = [
    // {
    //     path: '/',
    //     import: () =>
    //         import('./screens/home/homeModule').then(
    //             (module) => module.default
    //         ),
    // },
    {
        path: '/client/',
        import: () =>
            import('./screens/home/homeModule').then(
                (module) => module.default
            ),
    },
    {
        path: '/client/dashboard/',
        import: () =>
            import('./screens/sales/dashboard/dashboardModule').then(
                (module) => module.default
            ),
    },
    {
        path: 'client/products',
        children: [
            {
                path: '/',
                import: () =>
                    import('./screens/sales/products/productsModule').then(
                        (module) => module.default
                    ),
            },
            // {
            //     path: ':id',
            //     import: () =>
            //         import('./screens/sales/products/productsModule').then(
            //             (module) => module.default
            //         ),
            // },
        ],
    },
    // {
    //     path: 'cart',
    //     element: () =>
    //         import('./screens/sales/cart').then((module) => <module.default />),
    // },
];

export type LocationGenerics = MakeGenerics<{
    LoaderData: {
        products: Product[];
        product: Product;
    };
}>;

export const location = new ReactLocation();
