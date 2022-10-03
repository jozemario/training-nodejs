import dynamic from 'next/dynamic';
import Layout from '../components/layouts/page-layout';
import { StoreProvider, useStore } from 'store/store';

const PublicLayout = dynamic(() => import('remote1/PublicLayout'), {
    ssr: false,
});
const PrivateLayout = dynamic(() => import('remote1/PrivateLayout'), {
    ssr: false,
});
const AdminLayout = dynamic(() => import('remote1/AdminLayout'), {
    ssr: false,
});

const layouts = {
    public: <PublicLayout />,
    private: <PrivateLayout />,
    admin: <AdminLayout />,
};

const Page = () => {
    const { count, increment, clear } = useStore();
    return (
        <Layout title={'Projects'} backRoute="/">
            {layouts.private}
        </Layout>
    );
};

const Wrapper = () => {
    return (
        <StoreProvider>
            <Page />
        </StoreProvider>
    );
};

export default Wrapper;
