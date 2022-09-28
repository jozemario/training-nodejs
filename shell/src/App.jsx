import React from 'react';
// import { People } from './pages/People';
// import BasicSWR from './pages/BasicSWR';
// import InfiniteSWR from './pages/InfiniteSWR';

const RemoteContent = React.lazy(() => import('remote2/Nav'));

export default () => {
    return (
        <>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: shell</div>
                <div>Framework: react ssr</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <RemoteContent />
            </React.Suspense>
            {/* <div onClick={() => alert('shell is interactive')}>
                <h1>Module Federation Example: Server Side Rendering</h1>
                <h2>This is the shell application.</h2>
            </div>
            <People />
            <BasicSWR />
            <InfiniteSWR /> */}
        </>
    );
};
