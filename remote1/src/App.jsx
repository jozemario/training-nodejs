// import React from "react";
// import ReactDOM from "react-dom";
// import Content from "./Content";

// //  import Header from './Header';
//  import StoreProvider from 'store/store';

//  //ReactDOM.render(<App />, document.getElementById('app'));

//  const App = () => (
//      <>
//          {/* <Header /> */}
//          <StoreProvider>
//              <div className="mt-10 text-3xl mx-auto max-w-6xl">
//                  <div>Name: remote1</div>
//                  <Content />
//              </div>
//          </StoreProvider>
//      </>
//  );
//  ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Content from './Content';

import { StoreProvider, useStore } from 'store/store';

//import "./index.scss";

const App = () => {
    const { count, increment } = useStore();
    return (
        <>
            <div className="text-3xl mx-auto max-w-6xl">
                <Header />
                <div>Name: remote1</div>
                <div>Count: {count}</div>
                <div>
                    <button
                        onClick={increment}
                        className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className="container">
                <div>Name: remote1</div>
                <Content />
            </div>
        </>
    );
};
ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('app')
);
