import Head from 'next/head';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';

import Layout from '../components/layouts/page-layout';
import BaseLayout from '../components/layouts/base-layout';
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
const HeaderRemote1 = dynamic(() => import('remote1/Header'), {
    ssr: false,
});

const PublicLayout = dynamic(() => import('remote1/PublicLayout'), {
    ssr: false,
});
const PrivateLayout = dynamic(() => import('remote1/PrivateLayout'), {
    ssr: false,
});
const AdminLayout = dynamic(() => import('remote1/AdminLayout'), {
    ssr: false,
});

const Left = (counters) => {
    console.log('counters:', counters);
    return (
        <BasicCounters
            label={'Our company is expanding, you could be too.'}
            counters={counters}
        />
    );
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
const layouts = {
    public: <PublicLayout />,
    private: <PrivateLayout />,
    admin: <AdminLayout />,
};
const headers = {
    headerNavbar: <HeaderNavbar />,
    loginNavbar: <LoginNavbar />,
    headerRemote1: <HeaderRemote1 />,
    headerRemote2: <Header />,
};
const Home = () => {
    const { count, increment, clear, menuItems } = useStore();
    return (
        <Layout title={'xshell'}>
            {/* {layouts.public} */}
            {/* <Header state={(count, increment, clear)} /> */}
            <PublicLayout state={menuItems} />
        </Layout>
        // <BaseLayout
        //     sidebar={<HeaderNavbar />}
        //     navbar={<LoginNavbar />}
        //     left={
        //         <Left
        //             counters={[
        //                 {
        //                     title: 'Clicks',
        //                     stat: count,
        //                     icon: <BsPerson size={'3em'} />,
        //                 },
        //             ]}
        //         />
        //     }
        //     right={<Right count={count} increment={increment} clear={clear} />}
        //     footer={<MainFooter />}
        // ></BaseLayout>
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
