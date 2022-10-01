import React from 'react';
const Nav = React.lazy(() => import('remote2/Nav'));

export default (state) => {
    return (
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Nav state={state} />
        </React.Suspense>
    );
};
