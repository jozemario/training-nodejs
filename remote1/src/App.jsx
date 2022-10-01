import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider, useStore } from 'store/store';

const Image = React.lazy(() => import('remote2/Image'));
const Nav = React.lazy(() => import('remote2/Nav'));

const App = () => {
    const { imgSrc } = useStore();
    console.log('remote1 imgSrc:', imgSrc);

    return (
        <>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: remote1</div>
                <div>Framework: react</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Nav />
            </React.Suspense>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Image imgSrc={imgSrc} />
            </React.Suspense>
        </>
    );
};

const Wrapper = () => (
    <StoreProvider>
        <App />
    </StoreProvider>
);

ReactDOM.render(<Wrapper />, document.getElementById('app'));
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Header from './Header';
// import Content from './Content';

// import { StoreProvider, useStore } from 'store/store';

// const App = () => {
//     const { count, increment } = useStore();
//     return (
//         <>
//             <div className="text-3xl mx-auto max-w-6xl">
//                 <Header />
//                 <div>Name: remote1</div>
//                 <div>Count: {count}</div>
//                 <div>
//                     <button
//                         onClick={increment}
//                         className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
//                     >
//                         Add To Cart
//                     </button>
//                 </div>
//             </div>
//             <div className="container">
//                 <div>Name: remote1</div>
//                 <Content />
//             </div>
//         </>
//     );
// };
// ReactDOM.render(
//     <StoreProvider>
//         <App />
//     </StoreProvider>,
//     document.getElementById('app')
// );
