import {
    Flex,
    Container,
    VStack,
    Box,
    Button,
    ButtonGroup,
    Heading,
    Spacer,
} from '@chakra-ui/react';
export const LoginNavbar = () => (
    <>
        <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
                <Heading size="md">MF App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap="2">
                <Button colorScheme="teal">Sign Up</Button>
                <Button colorScheme="teal">Log in</Button>
            </ButtonGroup>
        </Flex>
    </>
);
