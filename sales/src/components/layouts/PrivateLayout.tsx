import React, { Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import PrivateNav from '../navs/PrivateNav';

export default ({ children }) => {
    return (
        <Fragment>
            <Header />
            <PrivateNav />
            <Layout>{children}</Layout>
            <Footer />
        </Fragment>
    );
};
