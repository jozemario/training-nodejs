import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
import { Link } from 'react-scroll';

import React from 'react';

const CTA = 'Get Started';

export default function Header(state) {
    console.log('Header State:', state);
    const data = state;
    return (
        <chakra.header id="header">
            <Flex w="100%" px="6" py="5" align="center" justify="space-between">
                // Logo
                <Image
                    src={
                        'http://localhost:3000/favicon/android-chrome-512x512.png'
                    }
                    h="50px"
                />
                // Nav Items
                <HStack as="nav" spacing="5">
                    {data.map((item, i) => (
                        <Link key={i}>
                            <Button variant="nav"> {item.label} </Button>
                        </Link>
                    ))}
                </HStack>
                // Call to action items
                <HStack>
                    <Button>{CTA}</Button>
                </HStack>
            </Flex>
        </chakra.header>
    );
}
