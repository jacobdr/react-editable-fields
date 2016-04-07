const path = require('path');

module.exports = {
    plugins: [
        // your custom plugins
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loaders: ['style', 'raw'],
                include: path.resolve(__dirname, '../')
            },
            {
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, '..')
            }
        ]
    },
    node: {
        fs: "empty"
    }
}
