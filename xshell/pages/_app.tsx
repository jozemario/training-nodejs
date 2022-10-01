//import '../styles/globals.scss';
import '../styles/globals.css';
import { Chakra } from '../src/Chakra';
import { theme } from '../src/theme';
import AppLayout from '../components/layouts/app-layout';

function MyApp({ Component, pageProps }) {
    return (
        <Chakra theme={theme} cookies={pageProps.cookies}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Chakra>
    );
}

export default MyApp;
