const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports = {
    client: new ModuleFederationPlugin({
        name: 'remote1',
        filename: 'remoteEntry.js',
        remotes: {
            remote2: 'remote2@http://localhost:3002/client/remoteEntry.js',
            store: 'store@http://localhost:3003/client/remoteEntry.js',
        },
        exposes: {
            './Content': './src/Content',
            './Header': './src/Header',
            './PublicLayout': './src/PublicLayout',
            './AdminLayout': './src/AdminLayout',
            './PrivateLayout': './src/PrivateLayout',
        },
        shared: {
            ...deps,
            // react: {
            //     singleton: true,
            //     requiredVersion: deps.react,
            // },
            // 'react-dom': {
            //     singleton: true,
            //     requiredVersion: deps['react-dom'],
            // },
            react: {
                singleton: true,
                version: '0',
                requiredVersion: false,
            },
            'react-dom': {
                requiredVersion: false,
                singleton: true,
                version: '0',
            },
        },
    }),
    server: [
        new NodeFederationPlugin({
            name: 'remote1',
            filename: 'remoteEntry.js',
            library: { type: 'commonjs-module' },
            remotes: {
                remote2: 'remote2@http://localhost:3002/server/remoteEntry.js',
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
            exposes: {
                './Content': './src/Content',
                './Header': './src/Header',
                './PublicLayout': './src/PublicLayout',
                './AdminLayout': './src/AdminLayout',
                './PrivateLayout': './src/PrivateLayout',
            },
            shared: {
                ...deps,
                // react: {
                //     singleton: true,
                //     requiredVersion: deps.react,
                // },
                // 'react-dom': {
                //     singleton: true,
                //     requiredVersion: deps['react-dom'],
                // },
                react: {
                    singleton: true,
                    version: '0',
                    requiredVersion: false,
                },
                'react-dom': {
                    requiredVersion: false,
                    singleton: true,
                    version: '0',
                },
            },
        }),
        new StreamingTargetPlugin({
            name: 'remote1',
            library: { type: 'commonjs-module' },
            remotes: {
                remote2: 'remote2@http://localhost:3002/server/remoteEntry.js',
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
        }),
    ],
};