import React from 'react';

import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';

const RemoteContent = dynamic(() => import('remote1/Content'), {
    ssr: false,
});
// const Header = dynamic(() => import('remote1/Header'), {
//     ssr: false,
// });
// const { StoreProvider, useStore } = dynamic(() => import('store/store'), {
//     ssr: false,
// });

const Home = () => {
    const { count, increment } = useStore();
    return (
        <div className="container">
            <div className="text-3xl mx-auto max-w-6xl">
                <h1>Next JS and React + Redux</h1>
                {/* <Header /> */}
                <div>Name: xshell</div>
                <div>Count: {count}</div>
                <div>
                    <button
                        onClick={increment}
                        className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Add To Cart
                    </button>
                </div>
                <h2>Client - Content</h2>
                <RemoteContent />
            </div>
        </div>
    );
};

export default () => {
    return (
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
};
