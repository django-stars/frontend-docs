---
id: skeleton_access
title: Access levels
sidebar_label: Access levels
---

In most cases you will have access levels in your React app. To handle access levels you can use built-in access module.
You can find this module in `common/session` folder.


## ~~CheckAccess~~

React component for conditional rendering

Props: 

|  Property       |      type             |      Description      |
| --------------- | --------------------- | --------------------- |
|   access        | Integer               | Access Level           |
|   fallback      | React Element         | React Component to render if condition is `false`           |


Usage:

```jsx
import { access, CheckAccess } from 'common/session'

function ConditionalElement() {
  return (
    <CheckAccess access={access.F_PROTECTED}>
      <UserLogo/>
    </CheckAccess>
  )
}
```

```jsx
import { access, CheckAccess } from 'common/session'

function ConditionalElement() {
  return (
    <CheckAccess 
      access={access.F_PROTECTED}
      fallback={<DefaultAvatar />}
    >
      <UserLogo/>
    </CheckAccess>
  )
}
```

## ~~Page level access~~

[RouteRecursive](/frontend-docs/docs/skeleton/skeleton_routing) also uses CheckAccess. To set up page access level you can use a pair of configs `access` and `accessRedirectTo`.

Usage:

```javascript
[
  {
    path: '/auth',
    routes: auth,
    access: access.F_UNAUTHORISED,
    accessRedirectTo: '/dashboard',
  },
  {
    path: '/dashboard',
    routes: dashboard,
    access: access.F_PROTECTED,
    accessRedirectTo: '/auth',
    name: 'dashboard',
  },
]
```

This is a common example of authorisation flow, when user is already logged in, so he does not have permissions to visit login page, so that he will be redirected to `/dashboard`. And vice versa, not authorised user doesn't have permissions to your internal application.


## ~~Define new access level~~

By default this module has 3 access levels:

|  Value             |      Description      |
| ------------------ | --------------------- |
|   F_PUBLIC         | Public access         |
|   F_PROTECTED      | Authorised user       |
|   F_UNAUTHORISED   | Not authorised user   |

To define your own access level you can use `common/session/access.js` file.

Steps:

1. Define new access level

```javascript
export const F_ADMIN_USER = 2 ** 3
```

2. Create selector

```javascript
export const userLevelSelector = createSelector(
  // base permissions
  (state) => isEmpty(get(state, 'session.data.token')) ? F_UNAUTHORISED : F_PROTECTED,
  (state) => get(state, 'session.user.role') === 'admin' ? F_ADMIN_USER : 0,

  // collect all user permissions
  (...args) => args.reduce((level, flag) => level | flag, F_PUBLIC)
)
```
