---
id: skeleton_architecture
title: Architecture
sidebar_label: Architecture
---

## root

```
src
 ├── index.html
 ├─> styles
 ├─> img
 ├─> fonts
 └─> app

```


| File            |      Description      |
| --------------- | --------------------- |
|   index.html    | Main html file. This file will be processed with [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/), which will add links for javascript and css files. |
|   img           |   Folder for image assets.    |
|   fonts         |   Folder for fonts assets.    |
|   styles        |   Folder for css files. Here we can specify root styles mixins and variables. By default it uses bootstrap.    |
|   app           |   Folder for your javascript code.    |


## app

```
app
 ├─> common
 ├─> layouts
 ├─> pages
 ├─> store
 ├── App.js
 ├── api.js
 ├── index.js
 ├── init.js
 ├── polyfills.js
 └── routes.js
```

| File            |      Description      |
| --------------- | --------------------- |
|   common        | Folder for cross-project reusable components and helper functions |
|   layouts       | Folder for layout components    |
|   pages         | Folder for page components    |
|   store         | Folder for redux middle-wares actions and reducers  |
|   App.js        | Root React component    |
|   api.js        | File to define module for HTTP requests    |
|   init.js       | File with global redux configurations and main application imports such as polyfills, styles, etc.   |
|   polyfills.js  | File with polyfills for cross-browser support    |
|   routes.js     | File with root routes (JSON configs)    |
|   index.js      | entry point of react application    |


## common

```
common
 ├─> forms
 ├─> router
 ├─> session
 ├─> utils
 └─> widgets
```

| File            |      Description      |
| --------------- | --------------------- |
|   forms         | Folder for form code. For more information read [here](/frontend-docs/docs/skeleton/skeleton_forms) |
|   router        | Folder for navigation code. For more information read [here](/frontend-docs/docs/skeleton/skeleton_routing)    |
|   session       | Folder for level access code. For more information read [here](/frontend-docs/docs/skeleton/skeleton_access)    |
|   utils         | Folder for cross-application helpers functions  |
|   widgets       | Folder for cross-application React components   |

## pages

We recommend you to use router-based architecture. This architecture is the most suitable for easy scaling in large applications. The main idea is to group your code based on screens. Also you can group screens in some folder if it has some logical common things. For example session authorization screens such as Login, SignUp, ForgotPassword.... can be grouped together in `auth` folder.

We recommend that each page folder contain these files:

```
pages
 └─> auth
     ├── index.js
     ├─> login
     │   ├── Login.js
     │   ├── LoginView.js
     │   ├── index.js
     │   ├── login.scss
     │   ├─> utils
     │   ├─> widgets
     │   └── withLogin.js
     └── routes.js
```

Please, note that all files inside `login` folder should consist `login` in their name.

| File            |      Description      |
| --------------- | --------------------- |
|   index.js      | entry point           |
|   routes.js     | File with JSON configs for this page. For more information read [here](/frontend-docs/docs/skeleton/skeleton_routing)    |
|   utils         | Folder for cross-page helper functions    |
|   widgets       | Folder for cross-page React components     |
|   login.scss    | Page styles. This file should be same as folder name, in case folder name is camelcase, use `-`, for example `user-profile.scss`   |
|   withLogin.js  | JS file to describe all [HOCs](https://reactjs.org/docs/higher-order-components.html)    |
|   LoginView.js  | React Component for Login form. Mostly this should be pure function that returns JSX. All props and logic should be defined in `withLogin.js` file |
|   Login.js      | File that combine LoginView and withLogin |
|   LoginPage.js  | Layout file for login page     |



