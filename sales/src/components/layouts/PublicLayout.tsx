import React, { Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import PublicNav from '../navs/PublicNav';

export default ({ children }) => {
    return (
        <Fragment>
            <Header />
            <PublicNav />
            <Layout>{children}</Layout>
            <Footer />
        </Fragment>
    );
};
