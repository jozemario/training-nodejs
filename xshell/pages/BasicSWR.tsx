import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BasicSWR = () => {
    const { data, error } = useSWR(
        'https://api.github.com/repos/vercel/swr',
        fetcher
    );

    if (error) return <div>An error has occurred.</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👁 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    );
};
export default BasicSWR;
