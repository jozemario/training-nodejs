// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const base = '../';
const paths = {
    appAssets: resolveApp(base + 'src/assets'), // For images and other assets
    appBuild: resolveApp(base + 'build'), // Prod built files end up here
    appConfig: resolveApp(base + 'config'), // App config files
    appHtml: resolveApp(base + 'src/index.html'),
    appIndexJs: resolveApp(base + 'src/index.jsx'), // Main entry point
    appSrc: resolveApp(base + 'src'), // App source
};

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', 'css', 'scss'],
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // look for .css or .scss files.
                test: /\.(css|scss)$/,
                // in the `src` directory
                include: [path.resolve(paths.appSrc)],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                discardDuplicates: true,
                                sourceMap: false,
                                // This enables local scoped CSS based in CSS Modules spec
                                modules: true,
                                // generates unique name for each class (e.g. app__app___2x3cr)
                                localIdentName:
                                    '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
        ],
    },
};
