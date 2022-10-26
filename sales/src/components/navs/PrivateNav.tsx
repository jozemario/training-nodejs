import React from 'react';
import { Link } from 'react-location';
export default () => {
    return (
        <nav className="flex sm:justify-end space-x-4">
            {[
                ['Dashboard', '/client/dashboard'],
                ['Contact', '/client/contacts'],
                ['Invoices', '/client/invoices'],
                ['Products', '/client/products'],
                ['Config', '/client/configs'],
            ].map(([title, url]) => (
                <Link
                    id="title"
                    to={url}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                    {title}
                </Link>
            ))}
        </nav>
    );
};
