var path = require("path");
var fs = require("fs");

var pkg = require("./package.json");
var isProduction = process.env.NODE_ENV === "production";

const NodemonPlugin = require("nodemon-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

var nodeModules = {};

fs.readdirSync("node_modules")
    .filter(function(x) {
        return [".bin"].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = "commonjs " + mod;
    });

/*
 * gets the `main` key from the package.json
 * and uses it as the webpack output
 */
function getOutput() {
    const pathParts = pkg.main.split("/");
    const filenameParts = pathParts.pop().split(".");

    return {
        path: path.join(__dirname, pathParts.join("/")),
        filename: `./${filenameParts.join(".")}`
    };
}

module.exports = () => {
    return {
        mode: process.env.NODE_ENV,
        context: path.join(__dirname, "/src"),
        entry: "./server.js",
        target: "node",
        output: getOutput(),
        resolve: {
            alias: {
                "@scripts": path.resolve(__dirname, "src/scripts/"),
                "MM:shared": path.resolve(__dirname, "../shared/")
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/env"]
                        }
                    }
                }
            ]
        },
        plugins: [
            new NodemonPlugin({
                stdout: false, // disable console logs from outing to terminal
                nodeArgs: ["--inspect"] // enable node + chrome console debugging
            })
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        compress: { drop_console: isProduction }, // remove all console logs from production build
                        ecma: 6,
                        mangle: false
                    }
                })
            ]
        }
    };
};
