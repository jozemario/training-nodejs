import React, { Fragment } from 'react';
import BaseCounter from '../../../components/counters/BaseCounter';
import Layout from '../../../components/Layout';
import Nav from '../../../components/navs/PublicNav';
import type { LocationGenerics } from '../../../router';
import { useMatch } from 'react-location';
import PrivateLayout from '../../../components/layouts/PrivateLayout';
export default () => {
    const { products } = useMatch<LocationGenerics>().data;
    console.log('products:', products);
    return (
        <PrivateLayout>
            <BaseCounter />
        </PrivateLayout>
    );
};
