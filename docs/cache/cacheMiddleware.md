---
id: cache_middleware
title: cache middleware
sidebar_label: cache middleware
---

It is a [redux middleware](https://redux.js.org/advanced/middleware) that will:

1. Initialize redux store from cache on application start up 
2. Cache redux store data


## ~~API~~

```javascript
cacheMiddleware({
  storeKey: 'app_name',
  cacheKeys: ['user'],
  storage: localStorage,
})
```

### ~~storeKey~~
This is the key that may be internally used by storage. 
For example if you are using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) then it will be `keyName` in [Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).

:::tip

You can use `process.env.STORAGE_KEY` from .env file

:::

### ~~cacheKeys~~

It is an optional Array<String\> where you can define parts of your Redux store you want to cache

:::tip

You can use `JSON.parse(process.env.CACHE_STATE_KEYS)` from .env file

:::

:::caution

Please do not cache any user sensitive data such as authorization token or billing info to localStorage

:::

### ~~storage~~

Object that will cache data. In general you can use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [AsyncStorage](https://github.com/react-native-community/async-storage).

## ~~create own storage~~

```javascript
class OwnStorage {
  constructor() {
    this.store = new Map()
  }
  getItem(key) {
    return this.store.get(key)
  }
  setItem(key, value) {
    this.store.set(key, value)
  }
}
```

## ~~CheckCache~~

React Component that will not render your app while store is initializing from cache. You should wrap your application into this component in root Component.

```jsx
import { CheckCache } from '@ds-frontend/cache'

function App({ store, history }) {
  return (
    <Provider store={store}>
      <CheckCache>
        <Router history={history} routes={routes}/>
      </CheckCache>
    </Provider>
  )
}
```
