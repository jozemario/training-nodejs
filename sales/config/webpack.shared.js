module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
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
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: 'public',
                },
            },
            { test: /\.xlsx$/, loader: 'webpack-xlsx-loader' },
        ],
    },
};
