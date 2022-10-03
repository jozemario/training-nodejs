import dynamic from 'next/dynamic';
const Page = dynamic(
    async () => {
        return import('../async-pages/projects');
    },
    {
        ssr: false,
    }
);
export default function Projects() {
    return <Page />;
}
