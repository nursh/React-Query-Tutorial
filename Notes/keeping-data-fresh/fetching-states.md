# Fetching States

- isLoading
  - when data is being fetch(loaded) for the first time 
  - then the data is cached
  - only shown once 

- isFetching
  - for showing when data is being refreshed in the background
  - data will soon be up date after the refetch

- useIsFetching
  - returns number of queries currently being refetched
  - can be used to conditionally render a spinning component for refetching queries
    - should be placed at the top of the application
  - can also be used with filters to target queries
    - or targets all queries by default