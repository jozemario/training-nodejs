import React from 'react';
import { People } from './pages/People';
import BasicSWR from './pages/BasicSWR';
import InfiniteSWR from './pages/InfiniteSWR';

const RemoteContent = React.lazy(() => import('remote2/Nav'));
const Image = React.lazy(() => import('remote2/Image'));
const Header = React.lazy(() => import('remote2/Header'));

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

            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Image
                    imgSrc={
                        'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1019204/retina_500x200_image_0-1967657e3078be54d78ccc4d57eae106-f763757d0bd43e58ff9976083b458547.png'
                    }
                />
            </React.Suspense>

            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Header />
            </React.Suspense>

            <div
                onClick={() => alert('shell is interactive')}
                className="mt-10 text-3xl mx-auto max-w-6xl"
            >
                <div>Module Federation Example: Server Side Rendering</div>
                <div>This is the shell application.</div>
                <People />
                <BasicSWR />
                <InfiniteSWR />
            </div>
        </>
    );
};

