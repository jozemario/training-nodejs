import { Button, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layouts/page-layout';

const RemoteContent = dynamic(() => import('remote1/Content'), {
    ssr: false,
});

export default function Home() {
    const { push } = useRouter();
    return (
        <Layout title={'Content Page'}>
            <p>User dashboard</p>
            <RemoteContent />
        </Layout>
    );
}
