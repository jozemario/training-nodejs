import { Box, Center, Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../headers/public-header';

interface IProps {
    title: string;
    backRoute?: string;
    children: ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ title, backRoute, children }) => {
    return (
        <Box height="100vh">
            <Header title={title} backRoute={backRoute} />
            <Container mt={4}>
                <Center>{children}</Center>
            </Container>
        </Box>
    );
};

export default PublicLayout;
