---
id: resource_withInfinityList
title: withInfinityList
sidebar_label: withInfinityList
---

This is a function that will return HOC to work with infinity lists. 


## ~~API~~
```javascript
import { withInfinityList } from '@ds-frontend/resource'

withInfinityList(resource, options)
```


### ~~resource~~

This is a [Resource](/frontend-docs/docs/resources/connect_resources#resource) object or String configuration.
The difference between all previous HOCs is that withInfinityList does not accept several [Resource](/frontend-docs/docs/resources/connect_resources#resource) configs so that it cannot be an array.
It may also be a customResource function.


### ~~options~~

Object with additional configurations

|  Property          |      type             |      Default  |
| -------------------| --------------------- | --------------|
|   [refresh](/frontend-docs/docs/resources/resource_prefetchResources#refresh)          | Boolean               | true          |
|   [destroyOnUnmount](/frontend-docs/docs/resources/resource_prefetchResources#destroyonunmount) | Boolean               | true          | 
|   [defaultParams](/frontend-docs/docs/resources/resource_prefetchResources#defaultparams)    | Object                | null          | 
|   [Loader](/frontend-docs/docs/resources/resource_prefetchResources#loader)           | React Element         |               | 
|   [prefetch](/frontend-docs/docs/resources/resource_withFinalForm#prefetch)          | Boolean        |        true       | 

## ~~Usage~~
~~withInfinityList~~ will pass 3 more additional props to your component:

### ~~loadNext~~ 
Function that may be used on scroll end.
This will automatically increment offset by limit and concat previous data with the new batch of data.

:::caution

loadNext will only work with `offset` and `limit` pagination type

:::
### ~~onRefresh~~ 
Function that may be used to refresh page. In most cases it is pull down to refresh.
This will automatically set offset to 0 and replace previous data in redux with new one.
### ~~isRefreshing~~ 
A boolean indicator that shows if refresh is pending
### ~~onSearch~~ 
```
onSearch(filters)
```
onSearch is a function to handle whatever filter requests.
This function has debounce of 300ms to have ability to use it for on air search.
Also pending search requests will be terminated on component unmount and each next search request will terminate previous search request.

```javascript
import { withInfinityList } from '@ds-frontend/resource'

function InfinityListView({
  cars,
  loadNext,
  onRefresh,
  isRefreshing,
  onSearch
}) {
  return (
    <Fragment>
      <TextInput onChangeText={(value) => onSearch({ search: value })}/>
      <FlatList
        data={get(cars, 'data.results', [])}
        onEndReached={loadNext}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={YourItem}
        keyExtractor={yourKeyExtractor}
      />
    </Fragment>
  )
}
    
export default withInfinityList({
  namespace: 'cars',
  queries: ['offset', 'limit', 'search']
})(InfinityListView)

```
