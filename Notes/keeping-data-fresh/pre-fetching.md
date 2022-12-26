# Prefetching

- using placeholder data
  - before the query return with the real data

- no need to show loading state because of dummy data
- placeholderData property
  - default data for the query
  - be careful with dependent queries(one after the other)
    - the placeholderData might interfere with results
    - enable the second query only if the data is not a placeholder data
  - useful for providing fake data to a query
  - not stored in the cache

- initialData property
  - stored in the cache
  - very similar to the real data 
  - has stale and fresh state
  - usually used with initialDataUpdatedAt property
    - for refetching fresh data, used with staleTime
    - if the data is within the stale time starting from initialDataUpdatedAt it is considered fresh
      - else a refresh is to be made
  - can be initialized with a function

- initialData is a pull method for cache
  - get data from the cache
- use queryClient.getQueryData to get data from the cache
  - using the query key with the data(exact parameters)
  - then filter for the exact data you want
  - get the state of a query using queryClient.getQueryData
    - extract the dataUpdatedAt property
    - set it for the initialDataupdatedAt property for initial data
      - this tells the query what time it was fetched

- use queryClient.setQueryData to push data into the cache
  - useful for when a query can provide initialData for another query that comes after it
  - usually placed in the query function
- use users action for data fetching signals
  - when user hovers link
  - using data analytics
  - useful for page fetches
    - in the useEffect hook
  - use queryClient.prefetchquery
    - just loads data and puts it in the cache
  - Pitfalls
    - it needs all the query variables
    - uses tight coupling
      - use querykey factory to solve issues