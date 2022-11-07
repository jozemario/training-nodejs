import React, { Fragment } from 'react';
import { Suspense, useState, useEffect } from 'react';

import readXlsxFile from 'read-excel-file';

// const getGPS = new Promise((resolve) => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         resolve({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//         });
//     });
// });

// const GPS = () => {
//     const data = use(getGPS);
//     return <div>{JSON.stringify(data)}</div>;
// };

const idsFetch = fetch('/client/public/ids.json').then(async (res) => ({
    status: res.status,
    data: res.status === 200 ? await res.json() : null,
}));

export const getProductsXLSX = () =>
    new Promise(function (resolve, reject) {
        fetch('/client/public/CABYS.xlsx')
            .then((response) => response.blob())
            .then((blob) => readXlsxFile(blob))
            .then((rows) => {
                // `rows` is an array of rows
                // each row being an array of cells.
                console.log('getProductsXLSX:', rows);
                resolve(rows);
            })
            .catch((err) => {
                console.log('Error: ', err);
                reject(err.message);
            });
    });

const cachedFetches = {};
const cachedFetch = (url) => {
    if (!cachedFetches[url]) {
        cachedFetches[url] = fetch(url).then(async (res) => ({
            status: res.status,
            data: res.status === 200 ? await res.json() : null,
        }));
    }
    return cachedFetches[url];
};

const Detail = ({ id, key }) => {
    console.log(`Rendering Detail ${id}`);
    const data = cachedFetch(`/client/public/${id}.json`).then(async (res) => (
        <Suspense>
            <div key={key}>{JSON.stringify(data)}</div>;
        </Suspense>
    ));

    return (
        <Suspense>
            <div>{JSON.stringify(data)}</div>;
            <data />
        </Suspense>
    );
};

const Names = async () => {
    //const ids = await idsFetch();
    const products = await getProductsXLSX();

    //console.log(`Rendering names ${ids.data}`);
    console.log(`Rendering products ${products}`);
    let details: any[] = [];
    details = products as unknown as [];

    return (
        <div>
            {/* {ids?.data.map((id) => (
                <Detail key={id} id={id} />
            ))} */}
            {details?.map((id) => (
                <>
                    <div>{id}</div>
                    <Detail key={id} id={id} />
                </>
            ))}
        </div>
    );
};

export default () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        async function init() {
            const ids = await cachedFetch('/client/public/ids.json');
            await Promise.all(
                ids.data.map((id) => cachedFetch(`/client/public/${id}.json`))
            );
            setInitialized(true);
        }
        init();
    }, []);

    return (
        <Fragment>
            {initialized && <Suspense>{/* <Names /> */}</Suspense>}
        </Fragment>
    );
};
