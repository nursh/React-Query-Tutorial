# Parallel and Dependent Queries

- for parallel queries 
  - use Promise.all to load the queries together
- use useQueries to handle multiple queries
  - accepts an array of objects with the names
- for dependent queries and deferred queries
  - queries that depend on values of other queries
  - use the enabled property with the independent value
  - use fetchStatus to handle the loading of the data
    - if you use isLoading, the dependent query with show the loading state for a very long time
    - that is bad UX
    - the fetchStatus is better for handling loading for dependent
      - fetching -> isLoading
      - idle -> isError
        - already fetched or waiting
      - paused -> isSuccess