import React from 'react';
import { useMatch } from 'react-location';

import { currency } from '../../../schemas/products.schema';
import { addToCart, useLoggedIn } from '../../../schemas/cart.schema';

import type { LocationGenerics } from '../../../router';

export default function PDPContent() {
    const loggedIn = useLoggedIn();
    const { product } = useMatch<LocationGenerics>().data;

    return (
        <>
            {product && (
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                        <div className="flex">
                            <h1 className="font-bold text-3xl flex-grow">
                                {product.name}
                            </h1>
                            <div className="font-bold text-3xl flex-end">
                                {currency.format(product.price)}
                            </div>
                        </div>
                        {loggedIn && (
                            <div className="text-right mt-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                                    onClick={() => addToCart(product.id)}
                                    id={`addtocart_${product.id}`}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        )}
                        <div className="mt-10">{product.description}</div>
                        <div className="mt-10">{product.longDescription}</div>
                    </div>
                </div>
            )}
        </>
    );
}
