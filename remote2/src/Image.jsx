import React from "react";

export default () => (
    <div
        style={{
            backgroundColor: 'red',
            color: 'lightgrey',
            padding: '1rem',
            width: '500px',
        }}
    >
        <h2>Remote 2: Image</h2>
        <button
            style={{ marginBottom: '1rem' }}
            onClick={() => alert('Client side Javascript works!')}
        >
            Click me to test i'm interactive!
        </button>
        <img
            src="https://m.media-amazon.com/images/I/71u7sS3KXDL._AC_SL1100_.jpg"
            style={{ width: '100%' }}
            alt="serge"
            border="0"
        />
    </div>
);