import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ApiSWR = () => {
    const { data, error } = useSWR('/api/hello', fetcher);

    if (error) return <div>An error has occurred.</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div>
            <h1>Fetch from API</h1>
            <p>{data.name}</p>
            <strong>👁 {data.name}</strong>
        </div>
    );
};
export default ApiSWR;
