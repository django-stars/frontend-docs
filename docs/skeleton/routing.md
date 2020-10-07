---
id: skeleton_routing
title: Routing
sidebar_label: Routing
---

We use [react-router](https://reacttraining.com/react-router/web/guides/quick-start) to handle navigation for SPA projects.
But as react-router from version v4.x changed their API to use JSX React Component to describe navigation, we made own solution RouteRecursive, that helps to describe navigation using JSON syntax which is more suitable for router-based architecture and much more readable.

Most API is same as in react-router v3.x. Common idea is that you have JSON config with next properties:

|  Value             |      Type             |
| ------------------ | --------------------- |
|   path             | String|Array          |
|   exact            | Boolean               |
|   layout           | React Element         |
|   access           | Integer               |
|   accessRedirectTo | String                |
|   redirectTo       | String                |
|   component        | React Element         |
|   name             | String                |
|   routes           | Array                 |


## ~~path~~
Any valid URL path or array of paths that path-to-regexp@^1.7.0 understands. For more information you can read [here](https://reacttraining.com/react-router/web/api/Route/path-string-string).

## ~~exact~~
Flag that will check location to fully match with path. For more information you can read [here](https://reacttraining.com/react-router/web/api/Route/exact-bool).

## ~~redirectTo~~


## ~~routes~~

An array of nested routes.

## ~~component~~
React Element to render for this route.

## ~~name~~
This is unique route identificator. It is a common rule to use names for routes and then you can use navigation by name instead of url path. This practice helps you with renaming url paths without any impact on application work flow. Also because of nested route configs, sometimes it is hard to build the full path, so making it automatically will help you to avoid bugs.

:::caution

Always define `name` for routes and always use named Links and navigations to avoid bugs

:::


## ~~layout~~
Layout is a static content of application.
for example: 

---
<div class="adidas_auth">
    <img src="/img/adidas_1.png"/>
    <img src="/img/adidas_2.png"/>
</div>

---

In this example we have two pages: Login and Register. Both screens have same header and same sidebar at the right of screen and footer. In this case it is better to separate this component and name as a Layout.

```jsx
function AuthLayout({ children }){
  return (
    <Fragment>
      <Header/>
      <Row>
        {children}
        <Sidebar/>
      </Row>
      <Fotter/>
    </Fragment>
  )
}

const routes = [
  {
    path: '/auth',
    layout: AuthLayout,
    routes: [
      {
        path: '/',
        exact: true,
        redirectTo: '/auth/login',
      },
      {
        path: '/login',
        component: LoginForm,
        name: 'login',
      },
      {
        path: '/register',
        component: Register,
        name: 'register',
      },
    ],
  },
]


```

## ~~access~~

Access level for the route. For more information read [this](/frontend-docs/docs/skeleton/skeleton_access#page-level-access).

## ~~accessRedirectTo~~

Redirect url in case user doesn't have permissions to view this page.

# ~~Link~~

Overrides [Link](https://reacttraining.com/react-router/web/api/Link) component from react-router

- **to: String**. Instead of url like in the original Link Component, here you should use [name](/frontend-docs/docs/skeleton/skeleton_routing#name).
- **state: object**. State to persist to the location.
- **other props**

# ~~NavLink~~

Overrides [NavLink](https://reacttraining.com/react-router/web/api/NavLink) component from react-router

- **to: String**. Instead of url like in the original Link Component, here you should use [name](/frontend-docs/docs/skeleton/skeleton_routing#name).
- **state: object**. State to persist to the location.
- **other props**

# ~~withRouter~~
Overrides [withRouter](https://reacttraining.com/react-router/web/api/withRouter) HOC from react-router
You should use overridden withRouter to have named navigation using push and replace actions

The difference between original actions is that you may use route name in path instead of original url.
Also you can use an object for search param and it will be automatically converted to query string.


Examples:

- simple Link

```javascript
import { Link } from 'common/router'

// Link to /auth/login page
<Link to="login"/>
```

- dynamic Link


```javascript
// router.js

export default {
  name: 'user',
  path: 'users/:uuid'
  component: UserPage
}

// ussage
import { NavLink } from 'common/router'

// Link to /users/test
<Navlink to="user" uuid="test"/>

```

- named navigation actions

```javascript
// router.js

export default {
  name: 'user',
  path: 'users/:uuid'
  component: UserPage
}

// ussage
import { withRouter } from 'common/router'

//navigate to /users/test?page=1
function navigate(history) {
  return history.push(user, {
    uuid: 'test',
    search: {
      page: 1,
    }
  })
}

```
