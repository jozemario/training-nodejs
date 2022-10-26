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
import ProductCard from '../../../components/cards/ProductCard';

export default function Products() {
    //const loggedIn = useLoggedIn();
    const { sales } = useStore();
    console.log('Products:', sales.products);
    return (
        <PrivateLayout>
            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">
                        Product List
                    </span>
                    <ProductList rows={sales.products} pageCount={1} />
                </div>
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">
                        Product Detail
                    </span>

                    <ProductCard />
                </div>
                {/* <img
                    src="https://source.unsplash.com/random/480x360"
                    alt=""
                    className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500"
                /> */}
            </section>
            {/* <div className="container flex h-screen">
                <div className="m-auto">
                    <ProductList />
                </div>

                <div className="m-auto ">
                    <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
                        >
                            Architecto
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
                        >
                            Corrupti
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50"
                        >
                            Excepturi
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
                        >
                            Consectetur
                        </a>
                    </div>
                    <ProductCard />
                </div>
            </div> */}
        </PrivateLayout>
    );
}
