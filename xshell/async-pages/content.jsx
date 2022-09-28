import dynamic from 'next/dynamic';
const RemoteContent = dynamic(() => import('remote1/Content'), {
    ssr: false,
});
export default function Home() {
    return (
        <>
            <div className="flex mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: xshell</div>
                <div>Framework: Next JS + React + Redux</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
            </div>
            <div className="layout">
                <h2>Remote Content</h2>
                <RemoteContent />
            </div>
        </>
    );
}
