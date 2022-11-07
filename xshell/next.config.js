const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
    crossOrigin: 'anonymous',
    async headers() {
        return [
            {
                // matching all API routes
                source: '/:path*',
                //source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://localhost:3004/',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
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
