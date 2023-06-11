const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');


const myEslintOptions = {
    extensions: [`js`, `jsx`, `ts`],
    exclude: [`node_modules`],
};



module.exports = {
    mode: "development",
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,

    },
    output: {
        filename: 'main.js'
    },



    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: './src/index.pug'}),
        new TerserWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(myEslintOptions),
        new StylelintPlugin()

    ],
    optimization: {
        minimize: true,
        minimizer: [ new TerserWebpackPlugin(), new CssMinimizerPlugin(),]
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                use:[{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,}
                }, 'css-loader'],
                test: /\.css$/
            },





        ]
    }
};