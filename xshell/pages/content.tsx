import dynamic from 'next/dynamic';
const Page = dynamic(
    async () => {
        return import('../async-pages/content');
    },
    {
        ssr: false,
    }
);
export default function Content() {
    return <Page />;
}
