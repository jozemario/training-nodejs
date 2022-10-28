import React, { Fragment } from 'react';

export default () => (
    <Fragment>
        <section>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                    <img
                        src="https://source.unsplash.com/random/485x365"
                        alt=""
                        className="object-cover w-full h-auto max-h-96 bg-gray-500"
                    />
                    <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-900">
                        <span className="self-start px-3 py-1 text-sm rounded-full bg-violet-400 text-gray-900">
                            Business
                        </span>
                        <h2 className="text-3xl font-bold md:flex-1">
                            Easy way to create, store, sign, export orders &
                            invoices in no-time
                        </h2>
                        <div>
                            <p className="text-gray-400">October 25, 2022</p>
                            <p className="text-gray-400">By Jose Mario Gomez</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                    <h3 className="inline font-medium text-gray-50">
                        Panel-based blocks.
                    </h3>
                    <p className="inline">
                        Flexible panels that are perfect for building functional
                        layouts.
                    </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                    <h3 className="inline font-medium text-gray-50">
                        Responsive design.
                    </h3>
                    <p className="inline">
                        Panels look great no matter the device.
                    </p>
                </div>
                <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-900">
                    <h3 className="inline font-medium text-gray-50">
                        Orders. Invoices. Vendors Customers. Products.
                        Categories. Users.
                    </h3>
                    <p className="inline">
                        Join over 50 000 satisfied customers who use our
                        invoicing platform.
                    </p>
                </div>
            </div>
        </section>
        <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-gray-900">
                <span className="block mb-2 text-violet-400">
                    Sales App system
                </span>
                <h1 className="text-5xl font-extrabold text-gray-50">
                    Order and Invoice it with SalesApp
                </h1>
                <p className="my-8">
                    <span className="font-medium text-gray-50">
                        Modular and versatile.
                    </span>
                    The ultimate design toolkit for savvy technology startups.
                </p>
                <form
                    novalidate=""
                    action=""
                    className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                >
                    <div>
                        <label htmlFor="name" className="text-sm sr-only">
                            Your name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="text-sm sr-only">
                            Email address
                        </label>
                        <input
                            id="lastname"
                            type="text"
                            placeholder="Email address"
                            className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700"
                        />
                    </div>
                    <button className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">
                        Join the waitlist
                    </button>
                </form>
            </div>
            <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500"
            />
        </section>
    </Fragment>
);
