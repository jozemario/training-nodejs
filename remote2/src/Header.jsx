import React from 'react';
export default ({ count, clear }) => {
    return (
        <>
            <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
                <div className="flex-grow">Header in Remote2</div>
                <div>
                    {count}
                    <button
                        onClick={clear}
                        className="btn btn-primary bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Clear Cart
                    </button>
                </div>
            </header>
        </>
    );
};
