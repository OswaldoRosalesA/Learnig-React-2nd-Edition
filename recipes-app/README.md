# React app started from scrarch

1. npm init -y

2. npm install react react-dom serve prop-types

3. Project structure:
3.1 ./src/components
3.2 ./src/data
3.3 ./src/app.js

4. npm install --save-dev webpack webpack-cli babel-loader @babel/core 

5. Create file ./webpack.config.js >>

 // ./webpack.config.js

 var path = require("path");

 module.exports = {
   entry: "./src/app.js",
   output: {
     path: path.join(__dirname, "dist", "assets"),
     filename: "bundle.js"
   },
   module: {
     rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
   }
 };

6. npm install --save-dev @babel/preset-env @babel/preset-react

7. Create file ./.babelrc >>

 {
   "presets": ["@babel/preset-env", "@babel/preset-react"]
 }

