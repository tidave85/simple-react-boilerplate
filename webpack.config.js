const path = require('path');

module.exports = {
    entry: ["./app/index.js"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};