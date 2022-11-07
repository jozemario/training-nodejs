import React, { Component } from 'react';

export default ({ children }) => (
    <div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
        <div className="p-6 space-y-8">
            <main>
                <div className="container mx-auto space-y-16">{children}</div>
            </main>
        </div>
    </div>
);
