const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const {
    NodeFederationPlugin,
    StreamingTargetPlugin,
} = require('@module-federation/node');

module.exports = {
    client: new ModuleFederationPlugin({
        name: 'sales',
        filename: 'remoteEntry.js',
        remotes: { store: 'store@http://localhost:3003/client/remoteEntry.js' },
        exposes: {
            // './Image': './src/Image',
        },
        shared: {
            ...deps,
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
            name: 'sales',
            filename: 'remoteEntry.js',
            library: { type: 'commonjs-module' },
            remotes: {
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
            exposes: {
                // './Image': './src/Image',
            },
            shared: {
                ...deps,
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
            name: 'sales',
            library: { type: 'commonjs-module' },
            remotes: {
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
        }),
    ],
};
