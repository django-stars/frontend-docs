---
id: resource_navigationToProps
title: navigationToProps
sidebar_label: navigationToProps
---

Simple HOC that will just get all navigation state and pass it to props. Additionally it will parse query string and pass it to props.


## ~~API~~

```
navigationToProps(parseQueryParams)
```

parseQueryParams function is not required. By default it will use parseQueryParams from [queryParams](/frontend-docs/docs/queryParams/queryParams_about).

```javascript
navigationToProps()(MyReactElemt)
```

Example to prefetch data based on query string in browser url.

For example you have an url `users/list/?offset=20&limit=20&search=ma`


```javascript
import { navigationToProps, prefetchResources } from '@ds-frontend/resource'
import compose from 'redux'

export default compose(
  navigationToProps(),
  prefetchResources({
    endpoint: 'users',
    namespace: 'users',
    queries: ['offset', 'limit', 'search']
  })
)
```