import {
    useDisclosure,
    Flex,
    Box,
    Button,
    VStack,
    Icon,
    HStack,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Drawer from './drawer';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';

import React from 'react';

export default function MobileDrawer(state) {
    console.log('MobileDrawer State:', state);
    const data = state;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Flex>
            // Menu Button
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>
            // Drawer Component
            <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
                <VStack alignItems="left">
                    {data.map((item, i) => (
                        <Link key={i}>
                            <Button variant="text"> {item.label} </Button>
                        </Link>
                    ))}
                </VStack>
            </Drawer>
        </Flex>
    );
}
