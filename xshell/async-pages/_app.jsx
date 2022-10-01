import { StoreProvider, useStore } from 'store/store';

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}
export default MyApp;
