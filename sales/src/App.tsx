import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import {
    StoreProvider,
    useStore,
    useAppDispatch,
    useAppSelector,
} from 'store/store';

import MainLayout from './components/layouts/MainLayout';

const Wrapper = () => {
    const { imgSrc, sales, salesActions } = useStore();
    //console.log('imgSrc:', imgSrc);
    console.log('salesData:', sales, salesActions);

    return (
        <Fragment>
            <MainLayout />
            {/* <div className="flex supports-[display:grid]:grid">
                <div className="mt-10 text-3xl mx-auto max-w-6xl">
                    <div>Name: saleApp</div>
                    <div>Framework: react</div>
                    <div>Language: TypeScript</div>
                    <div>CSS: Tailwind</div>
                </div>

                <UserCard
                    image={src}
                    name={'John Doe'}
                    description={'Descripcion'}
                    status={'active'}
                />
                <Textbox />

                <div className="grayscale backdrop-blur-sm">
                    <div className="bg-white rounded-lg p-6 shadow-xl">
                        <div className="text-clip text-ellipsis">ELLIPSIS</div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    );
};

const App = () => (
    <StoreProvider>
        <Wrapper />
    </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
