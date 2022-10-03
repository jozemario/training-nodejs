import React from 'react';
const Navbar = React.lazy(() => import('remote2/Nav'));
const Sidebar = React.lazy(() => import('remote2/Nav'));
const Main = React.lazy(() => import('remote2/Nav'));
const Footer = React.lazy(() => import('remote2/Nav'));

export default (state) => {
    return (
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Navbar state={state} />
            <Sidebar state={state} />
            <Main state={state} />
            <Footer state={state} />
        </React.Suspense>
    );
};
