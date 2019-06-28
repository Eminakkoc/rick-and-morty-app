import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';

const SCSS_PATTERN = /\.scss$/;

const config = {
    entry: {
        ['rick-and-morty-app']: [
            'index.jsx',
            'index.scss',
        ],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: SCSS_PATTERN,
                enforce: 'pre',
                loader: 'import-glob-loader',
            },
            {
                test: SCSS_PATTERN,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'],
                    },
                },
            },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'rick-and-morty-app.css'
        }),
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, '.stylelintrc.json'),
            files: 'src/**/*.scss',
            syntax: 'scss'
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
};

export default config;
