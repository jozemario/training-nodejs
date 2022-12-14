import React from "react";
//const Image = React.lazy(() => import('remote2/Image'));
const Nav = React.lazy(() => import('remote2/Nav'));

export default () => (
    <>
        <h2>Remote 1: Content</h2>
        <p>
            This is the content from remote 1, which will include components
            exposed by remote2. This demonstrates nested federated modules being
            rendered server-side.
        </p>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Nav />
        </React.Suspense>
        {/* <React.Suspense fallback={<h1>Loading...</h1>}>
            <Image />
        </React.Suspense> */}
    </>
);