# Webpack Starterkit
A Webpack Starterkit For Front-End Development.

## Features:
* Easy To Use
* Compile SASS And SCSS Via [```sass-loader```](https://github.com/jtangelder/sass-loader)
* Handle The HTML Via [```html-webpack-plugin```](https://github.com/jantimon/html-webpack-plugin)
* Handle The Assets Via [```html-loader```](https://github.com/webpack-contrib/html-loader)
* Old Browsers Compatibility Via [```babel```](https://babeljs.io/)
* #### Production Version:
  * Cache Busting
  * Move The CSS To A Separate File Via [```mini-css-extract-plugin```](https://github.com/webpack-contrib/mini-css-extract-plugin)
  * Minifying The CSS Via [```css-minimizer-webpack-plugin```](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) (In addition to default minification for HTML and JS)
  * Clean Build Directory Via [```clean-webpack-plugin```](https://github.com/johnagan/clean-webpack-plugin)

## How To Use:
#### Install Dependencies
```sh
npm install
```

#### Start A Server For Development
```sh
npm start
```

#### Build The Optimized Production Version
```sh
npm run build
```
