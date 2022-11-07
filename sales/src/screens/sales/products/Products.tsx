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
import DataTable from '../../../components/tables/DataTable';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MaterialOrder from '../../../components/orders/MaterialOrder';

export default function Products() {
    //const loggedIn = useLoggedIn();
    const { sales } = useStore();
    const { products } = sales;
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];
    return (
        <PrivateLayout>
            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full p-1 rounded-md sm:p-16 xl:col-span-3 bg-gray-900">
                    <span className="block mb-2 text-violet-400">
                        Product List
                    </span>
                    {/* <ProductList rows={sales.products} pageCount={1} /> */}
                    <DataTable rows={products.items} columns={columns} />
                </div>
                <div className="w-full p-2 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">
                        Product Detail
                    </span>

                    {/* <BaseOrder /> */}
                    <MaterialOrder />
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
