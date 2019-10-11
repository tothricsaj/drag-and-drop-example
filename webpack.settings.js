const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    entry: {
        main: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
};
