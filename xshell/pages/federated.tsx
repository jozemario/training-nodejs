import React from 'react';
import { Helmet } from 'react-helmet';
import People from './People';
import BasicSWR from './BasicSWR';
import InfiniteSWR from './InfiniteSWR';
import ApiSWR from './ApiSWR';

// const Remote1Content = React.lazy(() => import('remote1/Content'));

const Page = () => (
    <div>
        <Helmet>
            <title>SSR MF Example</title>
        </Helmet>
        <div
            style={{
                backgroundColor: 'black',
                color: 'lightgrey',
                padding: '1rem',
            }}
            onClick={() => alert('shell is interactive')}
        >
            <h1>Module Federation Example: Server Side Rendering</h1>
            <h2>This is the shell application.</h2>
        </div>
        <People />
        <BasicSWR />
        <ApiSWR />
        <InfiniteSWR />

        {/* <React.Suspense fallback={<h1>Loading....</h1>}>
            <Remote1Content />
        </React.Suspense> */}
    </div>
);
export default Page;
