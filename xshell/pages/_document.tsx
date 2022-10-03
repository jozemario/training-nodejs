import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/favicon/apple-touch-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/favicon/apple-touch-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/favicon/apple-touch-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/favicon/apple-touch-icon-76x76.png"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/favicon/apple-touch-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/favicon/apple-touch-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/favicon/apple-touch-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/favicon/apple-touch-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="167x167"
                        href="/favicon/apple-touch-icon-167x167.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon-180x180.png"
                    />

                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/favicon/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="128x128"
                        href="/favicon/favicon-128x128.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="196x196"
                        href="/favicon/favicon-196x196.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/favicon/android-chrome-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="512x512"
                        href="/favicon/android-chrome-512x512.png"
                    />

                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="apple-mobile-web-app-title" content="MF App" />
                    <meta name="application-name" content="MF App" />
                    <meta name="msapplication-TileColor" content="#00aba9" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
