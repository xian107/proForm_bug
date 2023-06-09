const {whenDev, whenProd} = require('@craco/craco');
const CracoAlias = require("craco-alias");
const CircularDependencyPlugin = require('circular-dependency-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin'); // 打包进度


module.exports = {
    
    webpack: {
        plugins: [
            new SimpleProgressWebpackPlugin(),
            new AntdDayjsWebpackPlugin(),
            ...whenDev(
                () => [
                    new CircularDependencyPlugin({
                        exclude: /node_modules/,
                        include: /src/,
                        failOnError: true,
                        allowAsyncCycles: false,
                        cwd: process.cwd()
                    })
                ], []
            ),

            ...whenProd(
                () => [
                    new TerserPlugin({
                        terserOptions: {
                            ecma: undefined,
                            parse: {},
                            compress: {
                                warnings: false,
                                drop_console: true,
                                drop_debugger: true,
                                pure_funcs: ['console.log']
                            }
                        }
                    }),
                ], []
            )
        ],
        
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./",
                tsConfigPath: "./tsconfig.extend.json"
            }
        },
        
    ],
};