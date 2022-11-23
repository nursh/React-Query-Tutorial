# Query Client

- can set global default options
  - like staleTime, cacheTime and retry, error etc.
  - using defaultOptions property
    - setting for queries and mutations properties
- you can set a default query function for the entire app in the Query Client
  - use it by passing query keys to useQuery without including a function
  - can be overridden by passing query function
- To use more advanced and powerful features of React Query
  - you can access the query client directly using the useQueryClient hook
  - useQuery is declarative while useQueryClient is imperative
    - imperative -> giving explicit commands of what to perform
    - tell it to do something after fetching, like navigate to somewhere