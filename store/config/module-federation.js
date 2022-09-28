const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const {
    NodeFederationPlugin,
    StreamingTargetPlugin,
} = require('@module-federation/node');

module.exports = {
    client: new ModuleFederationPlugin({
        name: 'store',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
            './store': './src/store',
        },
        shared: {
            ...deps,
            react: {
                singleton: true,
                requiredVersion: deps.react,
            },
            'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
            },
        },
    }),
    server: [
        new NodeFederationPlugin({
            name: 'store',
            filename: 'remoteEntry.js',
            library: { type: 'commonjs-module' },
            remotes: {},
            exposes: {
                './store': './src/store',
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new StreamingTargetPlugin({
            name: 'store',
            library: { type: 'commonjs-module' },
            remotes: {},
        }),
    ],
};
