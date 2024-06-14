const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Обрабатываем все JS файлы
                exclude: /node_modules/, // Исключаем папку node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map', // source-maps
    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: true
        }
    },
    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: true
        }
    }
};
