import { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
    children: ReactElement | ReactElement[];
};

const AppLayout = ({ children, ...props }: Props) => {
    return (
        <Flex
            direction="column"
            maxW={{ xl: '1200px' }}
            m="0 auto"
            p={6}
            {...props}
        >
            {children}
        </Flex>
    );
};
export default AppLayout;
