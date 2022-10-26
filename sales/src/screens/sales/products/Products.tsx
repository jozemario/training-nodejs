import React from 'react';
import { Link } from 'react-location';
import { useMatch } from 'react-location';

import { currency } from '../../../schemas/products.schema';
import { addToCart, useLoggedIn } from '../../../schemas/cart.schema';

import type { LocationGenerics } from '../../../router';
//import { useStore } from 'store/store';
import PrivateLayout from '../../../components/layouts/PrivateLayout';
import ProductList from '../../../components/tables/ProductList';
import BaseOrder from '../../../components/orders/BaseOrder';
import { useStore } from 'store/store';

export default function Products() {
    //const loggedIn = useLoggedIn();
    const { sales } = useStore();
    console.log('Products:', sales.products);
    return (
        <PrivateLayout>
            <div className="flex h-screen">
                <div className="m-auto">
                    lista
                    {/* <ProductList /> */}
                </div>

                <div className="m-auto ">
                    {/* <BaseOrder /> */}
                    orden
                </div>
            </div>
        </PrivateLayout>
    );
}
