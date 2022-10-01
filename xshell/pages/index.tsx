import dynamic from 'next/dynamic';
const Page = dynamic(
    async () => {
        return import('../async-pages/index');
    },
    {
        ssr: false,
    }
);

const IndexPage = () => <Page />;

export default function Home() {
    return <IndexPage />;
}
