const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'host',
                    remotes: {
                        remote1:
                            'remote1@http://localhost:3001/client/remoteEntry.js',
                        remote2:
                            'remote2@http://localhost:3002/client/remoteEntry.js',
                        store: 'store@http://localhost:3003/client/remoteEntry.js',
                    },
                })
            );
        }

        return config;
    },
};
