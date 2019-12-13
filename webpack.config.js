const path = require("path");
module.exports = {
    entry: { // 入口
        "carrouse-circle": path.resolve(__dirname, './src/index.tsx')
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, 'dist'),
        library: 'carrouse-circle',
        libraryTarget: "umd",
        publicPath: "./dist/",
        libraryExport: 'default', // 默认导出
    },
    mode:"production", //"production","development"
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        contentBase: './dist'
    },

    resolve: {
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: path.resolve(__dirname, "./src/"),

                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    }
}
