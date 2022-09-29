//import 'reflect-metadata';
//import '../styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from '../src/Chakra';
import { theme } from '../src/theme';

function MyApp({ Component, pageProps }) {
    return (
        <Chakra theme={theme} cookies={pageProps.cookies}>
            <Component {...pageProps} />
        </Chakra>
    );
}

export default MyApp;
