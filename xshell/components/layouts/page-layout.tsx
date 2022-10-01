import { Box, Center, Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../headers/public-header';

interface IProps {
    title: string;
    backRoute?: string;
    children: ReactNode;
    customHeader: ReactNode;
}

const Layout: React.FC<IProps> = ({
    title,
    backRoute,
    children,
    customHeader,
}) => {
    const merged = (children) => (
        <>
            {customHeader ? (
                { customHeader }
            ) : (
                <Header title={title} backRoute={backRoute} />
            )}

            <Container mt={4}>
                <Center>{children}</Center>
            </Container>
        </>
    );
    return <Box height="100vh">{merged(children)}</Box>;
};

export default Layout;
