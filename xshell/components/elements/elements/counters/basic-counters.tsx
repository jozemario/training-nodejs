import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

interface CountersCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}
function CountersCard(props: CountersCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}>{title}</StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function BasicCounters({ counters }) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
            >
                Our company is expanding, you could be too.
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 1 }}
                spacing={{ base: 5, lg: 8 }}
            >
                {counters.counters.map((elem) => {
                    return (
                        <div key={elem.title}>
                            <CountersCard
                                title={`${elem.title}`}
                                stat={`${elem.stat}`}
                                icon={elem.icon}
                            />
                        </div>
                    );
                })}
                <CountersCard
                    title={'Servers'}
                    stat={'1,000'}
                    icon={<FiServer size={'3em'} />}
                />
                <CountersCard
                    title={'Datacenters'}
                    stat={'7'}
                    icon={<GoLocation size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}
