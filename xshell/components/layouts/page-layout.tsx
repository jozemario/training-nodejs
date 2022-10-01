import { Box, Center, Container } from '@chakra-ui/react';
import React from 'react';
import Header from '../headers/public-header';

interface IProps {
    title: string;
    backRoute?: string;
    children: React.ReactNode;
    customHeader: React.ReactNode;
}

const Layout: React.FC<IProps> = ({
    title,
    backRoute,
    children,
    customHeader,
}) => {
    const merged = (children) => (
        <>
            {customHeader ?? <Header title={title} backRoute={backRoute} />}

            <Container mt={4}>
                <Center>{children}</Center>
            </Container>
        </>
    );
    return <Box height="100vh">{merged(children)}</Box>;
};

export default Layout;
