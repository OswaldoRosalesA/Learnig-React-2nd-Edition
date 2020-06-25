// ./webpack.config.js

const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{test: /\.js$/, exclude: /node_modules/, use: "babel-loader"}]
    }
}