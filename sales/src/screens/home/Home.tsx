import React from 'react';
import { Link } from 'react-location';
import { useMatch } from 'react-location';

import { currency } from '../../schemas/products.schema';
import { addToCart, useLoggedIn } from '../../schemas/cart.schema';

import type { LocationGenerics } from '../../router';
import PublicLayout from '../../components/layouts/PublicLayout';
import HomeSection from '../../components/sections/section-buildit';

export default function Home() {
    const loggedIn = useLoggedIn();
    const { products } = useMatch<LocationGenerics>().data;
    console.log('Home: products:', products);
    return (
        <PublicLayout>
            <HomeSection />
        </PublicLayout>
    );
}
