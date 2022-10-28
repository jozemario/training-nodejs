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
//import CachedFetch from '../../../components/experimental/CachedFetch';
export default function Orders() {
    const { products } = useMatch<LocationGenerics>().data;
    console.log('products:', products);
    const { sales } = useStore();
    //const { products, orders, vendors, customers } = sales;
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
                    {/* <DataTable rows={products.items} columns={columns} /> */}
                    {/* <CachedFetch /> */}
                </div>
                <div className="w-full p-2 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">
                        Order Detail
                    </span>
                    <MaterialOrder />
                </div>
            </section>
        </PrivateLayout>
    );
}
