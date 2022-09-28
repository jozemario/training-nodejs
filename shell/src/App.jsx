import React from 'react';
import { Helmet } from 'react-helmet';
import { People } from './pages/People';
import BasicSWR from './pages/BasicSWR';
import InfiniteSWR from './pages/InfiniteSWR';

const RemoteContent = React.lazy(() => import('remote2/Nav'));
// const RemoteHeader = React.lazy(() => import('remote1/Header'));

export default () => {
    return (
        <>
            <Helmet>
                <title>SSR MF Example</title>
            </Helmet>
            <div
                className="container"
                onClick={() => alert('shell is interactive')}
            >
                <h1>Module Federation Example: Server Side Rendering</h1>
                <h2>This is the shell application.</h2>
            </div>

            <People />
            <BasicSWR />
            <InfiniteSWR />

            <React.Suspense fallback={<h1>Loading....</h1>}>
                <RemoteContent />
            </React.Suspense>
        </>
    );
};
