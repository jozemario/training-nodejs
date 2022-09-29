import { Flex, Container, VStack, HStack } from '@chakra-ui/react';

interface LayoutProps {
    navbar: React.ReactNode;
    sidebar: React.ReactNode;
    left: React.ReactNode;
    right: React.ReactNode;
    footer: React.ReactNode;
}

export default function BaseLayout({
    navbar,
    sidebar,
    left,
    right,
    footer,
}: LayoutProps) {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex h="100vh" py={20}>
                <VStack
                    w="full"
                    h="full"
                    p={10}
                    spacing={10}
                    alignItems="stretch"
                >
                    {navbar}
                    <HStack
                        w="full"
                        h="full"
                        p={10}
                        spacing={10}
                        alignItems="stretch"
                    >
                        {sidebar}
                        <VStack
                            w="full"
                            h="full"
                            p={10}
                            spacing={10}
                            alignItems="flex-start"
                        >
                            {left}
                        </VStack>

                        <VStack
                            w="full"
                            h="full"
                            p={10}
                            spacing={10}
                            alignItems="flex-start"
                            bg="gray.50"
                        >
                            {right}
                        </VStack>
                    </HStack>
                    {footer}
                </VStack>
            </Flex>
        </Container>
    );
}
