var path = require('path'),
        webpack = require("webpack"),
        libPath = path.join(__dirname, 'client'),
        wwwPath = path.join(__dirname, 'dist'),
        pkg = require('./package.json'),
        HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(libPath, '/app/modules/app.module.js'),
    output: {
        path: path.join(wwwPath),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(pug|jade)$/,
                loaders: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=img/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['ng-annotate-loader?add=true', 'babel-loader']
            },
            {
                test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
                loader: 'url-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [

        new webpack.ProvidePlugin({
            'window.Masonry': 'Masonry'
        }),

        // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(libPath, 'index.html'),
            inject: true
        }),

        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
