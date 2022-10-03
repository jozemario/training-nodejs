export const handleRouteChange = (url, { shallow }) => {
    console.log(
        `App is changing to ${url} ${
            shallow ? 'with' : 'without'
        } shallow routing`
    );
};

export const handleRouteChangeError = (err, url) => {
    if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
    }
};
