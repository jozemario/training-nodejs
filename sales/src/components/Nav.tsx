import React from 'react';

export default () => {
    return (
        <nav className="flex sm:justify-right space-x-4">
            {[
                ['Home', '/dashboard'],
                ['Orders', '/orders'],
                ['Invoices', '/invoices'],
                ['Products', '/products'],
                ['Config', '/configs'],
            ].map(([title, url]) => (
                <a
                    href={url}
                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                    {title}
                </a>
            ))}
        </nav>
    );
};
