import Head from 'next/head';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';
import BaseLayout from '../components/layouts/base-layout';
import Layout from '../components/layouts/page-layout';
import MainFooter from '../components/elements/footers/main-footer';
import { LoginNavbar } from '../components/elements/navbars/login-navbar';
import { HeaderNavbar } from '../components/elements/navbars/header-navbar';
import BasicCounters from '../components/elements/elements/counters/basic-counters';
import { BsPerson } from 'react-icons/bs';

// const HeaderNavbar = dynamic(() => import('remote2/Header'), {
//     ssr: false,
// });
const Header = dynamic(() => import('remote2/Header'), {
    ssr: false,
});

const Left = (counters) => {
    console.log('counters:', counters);
    return <BasicCounters counters={counters} />;
};
const Right = ({ count, increment, clear }) => (
    <>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: xshell</div>
            <div>Framework: Next JS + React + Redux</div>
            <div>CSS: Chakra</div>
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
const Home = () => {
    const { count, increment, clear } = useStore();
    return (
        // <Layout title={'xshell'}>
        //     <Header state={(count, increment, clear)} />
        // </Layout>
        <BaseLayout
            sidebar={<HeaderNavbar />}
            navbar={<LoginNavbar />}
            left={
                <Left
                    counters={[
                        {
                            title: 'Clicks',
                            stat: count,
                            icon: <BsPerson size={'3em'} />,
                        },
                    ]}
                />
            }
            right={<Right count={count} increment={increment} clear={clear} />}
            footer={<MainFooter />}
        ></BaseLayout>
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
