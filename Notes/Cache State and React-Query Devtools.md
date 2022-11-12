# Cache state and React Query Devtools

- React Query keeps track of server state
  - fetches data for component on mount
  - stores it in cache
  - then provide data for the component
  - for this it goes through 3 cyles
    - Loading
    - then "Success" or "Error"
    - use the isLoading, isSuccess or isError properties of the query to access them
- when does the query know to be refetched? (using fresh and stale states)
  - when data is fetched, the query status is marked as success or error
  - the cache entry of the data is marked as fresh if the data is not likely to change often
    - else it is marked as stale(default) -> data can be refetched
    - can be accessed by reading the isStale on the query object
  - on component unmount, the query is marked as inactive and the data is removed it isn't used for a while
  - marking a Query as fresh
    - staleTime property on useQuery to set time for when query is considered fresh

- using fetchStatus states
  - idle -> query doesn't need to be refetched
  - fetching -> it is currently being fetched
    - this is different from isLoading state, isLoading is only for the first time the query is run
    - fetching is for all other refetches
  - paused -> tried to fetch but stopped for some reason


## Triggering a refetch

- 4 triggers
  - when a component mounts or when query key changes or on remounting of component
  - when user refocuses on browser window
    - can be disabled by setting refetchOnWindowFocus to false
  - network reconnections
    - can be disabled with the refetchOnReconnect config option
  - using an option refetch trigger
    - can be set using refetchInterval option
    - useful for when data changes frequently

- paused query 
  - when query tries to fetch data but network is disconnected
  - then the query transitions to the fetching state


- Clearing cache
  - react query will remove query when it is inactive or when no component is using the query
  - it is removed when the query has been inactive for about 5 minutes
  - use the cacheTime option to set duration for which the cache should hold the data after it's inactive

