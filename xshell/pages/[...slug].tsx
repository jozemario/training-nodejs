import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Page = dynamic(
    async () => {
        const router = useRouter();
        const slug = router.query.slug;
        let path = `../async-pages/${slug}`;
        return import(path);
    },
    {
        ssr: false,
    }
);
export default function PageAsync() {
    return <Page />;
}
