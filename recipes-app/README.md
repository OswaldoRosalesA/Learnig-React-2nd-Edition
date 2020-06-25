# React app started from scrarch

Create a new folder on our computer called recipes-app

Next, we’ll create the project and package.json file with npm, sending the -y flag to use all the defaults. We’ll also install react, and react-dom:
- `npm init -y`
- `npm install react react-dom serve`

Next, we’ll create the following directory structure to house the components:
- `recipes-app` (folder)
  - `node_modules` (already added with npm install command)
  - `package.json` (already added with npm init command)
  - `package-lock.json` (already added with npm init command)
  - `index.html`
  - `/src` (folder)
  - `app.js`
  - `/data` (folder)
  - `/components` (folder)

In order to create a static build process with webpack, we’ll need to install a few things. Everything we need can be installed with npm:
`npm install --save-dev webpack webpack-cli`

The default webpack configuration file is always webpack.config.js.

As webpack builds our bundle, we need to tell it to transform JSX to React elements.

The webpack.config.js file is just another module that exports a JavaScript literal object that describes the actions webpack should take. The configuration file should be saved to the root folder of the project, right next to the app.js file:

```javascript
// ./webpack.config.js

var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js"
  }
}
```
Next, let’s install the necessary Babel dependencies. We’ll need babel-loader and @babel/core:
`npm install babel-loader @babel/core --save-dev`

The next set of instructions for webpack consists of a list of loaders to run on specified modules. This will be added to the config file under the module field:

```javascript
module.exports = {
  ...
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  }
};
```

At this point, we need to specify presets for running Babel. Start by installing the presets:
`npm install --save-dev @babel/preset-env @babel/preset-react`

Then create one more file at the root of the project: `.babelrc`:
```javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


