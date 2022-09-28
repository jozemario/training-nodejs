import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";

import { StoreProvider, useStore } from 'store/store';
const App = () => {
    const { imgSrc } = useStore();
    console.log('imgSrc:', imgSrc);
    let src = `${imgSrc}`;
    return (
        <>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: remote2</div>
                <div>Framework: react</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <Image imgSrc={src} />;
        </>
    );
};

const Wrapper = () => (
    <StoreProvider>
        <App />
    </StoreProvider>
);

ReactDOM.render(<Wrapper />, document.getElementById('app'));
