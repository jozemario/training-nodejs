import React from 'react';

import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';

const Header = dynamic(() => import('remote2/Header'), {
    ssr: false,
});

const Home = () => {
    const { count, increment, clear } = useStore();
    return (
        <>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: xshell</div>
                <div>Framework: Next JS + React + Redux</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <Header count={count} clear={clear} />
            <div className="layout">
                <h2>Redux State in xshell</h2>
                <div>Count: {count}</div>
                <div>
                    <button
                        onClick={increment}
                        className="btn-primary bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </>
    );
};

const Wrapper = () => {
    return (
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
};

export default Wrapper;
