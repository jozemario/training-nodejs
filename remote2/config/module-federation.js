const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports = {
    client: new ModuleFederationPlugin({
        name: 'remote2',
        filename: 'remoteEntry.js',
        remotes: { store: 'store@http://localhost:3003/client/remoteEntry.js' },
        exposes: {
            './Image': './src/Image',
            './Button': './src/Button',
            './Nav': './src/Nav',
            './Notification': './src/Notification',
            './Header': './src/Header',
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
            name: 'remote2',
            filename: 'remoteEntry.js',
            library: { type: 'commonjs-module' },
            remotes: {
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
            exposes: {
                './Image': './src/Image',
                './Button': './src/Button',
                './Nav': './src/Nav',
                './Notification': './src/Notification',
                './Header': './src/Header',
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
            name: 'remote2',
            library: { type: 'commonjs-module' },
            remotes: {
                store: 'store@http://localhost:3003/server/remoteEntry.js',
            },
        }),
    ],
};