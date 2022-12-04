# manual query invalidation

- invalidateQueries vs refetchqueries on usequeryclient
  - refetchqueries triggers all queries that match the query keys
    - both active and inactive
    - useful for when the refetch is required
  - invalidateQueries only refeteches queries that are active(currently being used in a component)
    - and those queries that are stale


- To target queries and have more control over the queries
  - use exact true property to refetch a particular query
  - and other properties
    - active
    - stale
    - fresh etc.
- use invalidateQueries on useQueryClient when you don't have access to the queries on the component
  - rather than the refetch on the useQuery queries