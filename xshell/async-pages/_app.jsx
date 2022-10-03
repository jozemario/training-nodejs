//import { StoreProvider, useStore } from 'store/store';
import {
    handleRouteChange,
    handleRouteChangeError,
} from '../components/utils/handleRouteChange';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeError', handleRouteChangeError);
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router.events]);
    return (
        // <StoreProvider>
        <Component {...pageProps} />
        // </StoreProvider>
    );
}

export default MyApp;
