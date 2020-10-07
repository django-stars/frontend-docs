---
id: webpack
title: Webpack configurations
sidebar_label: Webpack configurations
---

If you're not familiar with webpack yet then you may want to read the official [webpack documentation](https://webpack.js.org/concepts/).

As a core fundament of flexible webpack configuration, we use [webpack-blocks](https://github.com/andywer/webpack-blocks). That makes webpack configuration much easier and reusable. All configs are split to separate presets, you can find them in `presets` folder.


## ~~assets~~ 
block to handle static files. By default it will copy all assets files (images and fonts), rename them with unique hash name and put to `dist/assets` folder. 
All you need is to configure your nginx to serve all files from `dist` folder as a static. 

:::tip

Note that you shouldn't worry about static files folder, webpack will search for static files in your entire project directory. But we recommend storing all image files in `img` folder and fonts in `fonts` folder.

:::

## ~~babel~~

block that overrides standard [babel block](https://github.com/andywer/webpack-blocks/tree/master/packages/babel) and changes only `exclude` configuration.

:::caution

Please do not remove this preset. This is a temporary solution, but to make everything work fine we should define this preset.

:::

## ~~postcss~~

block to handle postcss syntax with [postcss-loader](https://github.com/postcss/postcss-loader)

## ~~sass~~

block to handle SASS/SCSS files and compile to css with [sass-loader](https://webpack.js.org/loaders/sass-loader)

## ~~styles~~

block that will use [css-modules](https://github.com/css-modules/css-modules) plugin with [sass-loader](https://webpack.js.org/loaders/sass-loader) and [postcss-loader](https://github.com/postcss/postcss-loader)

By default it will skip css-modules compilation when SSR is true.


## ~~proxy~~

This block is used only for development purposes. 
By default webpack will run [dev-server](https://webpack.js.org/configuration/dev-server/) on http://localhost:3000, so to avoid cross origin errors you can simply proxy your backend server to same destination as webpack dev-server.

To configure this block you can use env variables:


#### ~~BACKEND_URL~~ **[URL]** 

Specify the url where your backend server is running. It could be for example http://localhost:8000 or remote url like https://your.domain.com.

:::caution

Please note that **BACKEND_URL** should not contain trailing slash

:::


#### ~~API_URL~~ **[String]** 

Specify nginx configuration for REST API url, for example `/api/v1/`. With this configuration all HTTP requests from http://localhost:3000/api/v1/* will be proxied to:
```javascript 
`${BACKEND_URL}+${API_URL}` => http://localhost:8000/api/v1/
```

:::caution

Please, note that **API_URL** should contain trailing slash

:::


#### ~~PROXY~~ **[Array<String\>]** 
Array of endpoints to proxy default:
```javascript
["${API_URL}", "/static/", "/media/"]
```
Please note that API_URL is automatically included to proxy. If you need more urls to proxy you can easy add urls to this array, or remove unnecessary.


#### ~~SSR~~ **[Boolean]**  
This flag mostly can be used to develop MPA (multi-page applications), when you have backend with some template languages, so that all content is served from backend and from front-end part you need just to add styles and small user interactions using javascript.

Please note that this is not SSR like next.js. This is just proxy configuration, that means that all api requests will be served from backend except frontend assets.


#### ~~DEV_SERVER_PORT~~ **[Integer]** 
Port to run webpack dev-server [default 3000].

:::tip

As a good practice in your javascript code it's better to use relative url paths instead of absolute ones.

_Bad:_ 
```javascript
fetch('https://localhost:3000/api/v1/users')
```
~~Good:~~
```javascript
fetch('/api/v1/users')
```

:::

## ~~react~~

Block to handle [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax.
This block will add [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) and [@babel/preset-flow](https://babeljs.io/docs/en/babel-preset-flow) presets.

Additionally, this block will add [babel-plugin-react-require](https://www.npmjs.com/package/babel-plugin-react-require) plugin. So that it is not required anymore to write:

```javascript
import React from 'react'
```

## ~~spa~~

block that will mostly be used paired with [react](/frontend-docs/docs/skeleton/webpack#react) preset.

This block utilizes [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to inject links into compiled javascript and css files into html. 

Also this plugin will add a hash in the filename which changes after every compilation and help you to distribute your code avoiding browser cache.

:::caution

Please, note that it is important to use SPA and React presets at the same time.

:::

## ~~sentry~~

block to upload [Sentry](https://sentry.io/welcome/) source maps.
To configure this plugin you should use global environment variables. Please read this [docs](https://docs.sentry.io/cli/configuration/) for more information.

## ~~Module resolver~~

webpack configuration that includes module resolver rule that will find a path relative to `src/app` folder, so that, you can avoid lots of `../../../` in your code and use path relative to `src/app` folder.


For example:

```javascript
import { Link } from 'common/router'  => /src/app/common/router/index.js
```

## ~~Cross browser support~~

We use [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and [Autoprefixer](https://github.com/postcss/autoprefixer) to support modern syntax in different browsers. To configure these plugins you can use `.browserslistrc` file.

## ~~Adding new env variable~~

There are several steps how to define env variable in .env file and then use it in your javascript code.

1. Add a variable to .env file

```properties
.env

MY_CUSTOM_VARIABLE=TEST
```

2. Add a variable in webpack.config.babel.js

```javascript

setEnv([..., 'MY_CUSTOM_VARIABLE'])
```

3. Use this variable in your javascript

```javascript
console.log(process.env.MY_CUSTOM_VARIABLE)
```




