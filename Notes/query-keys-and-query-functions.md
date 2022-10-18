# Query Keys and Query Functions

- Every query requires two things
  - query key
  - query function


## Query Keys

- React Query stores the results of its query in the cache
  - the query key uniquely identifies each query result and knows which to refetch
- we can pass values to useQuery that lets it know when to refetch
- Order your params, IDs from generic to specific
- Example, to fetch for something like - "http://api.github.com/repos/{owner}/{repo}/issues
  - useQuery(["issues", owner, repo], fetchIssues )
    - we are fetching "issues"
    - pass the owner param
    - then pass the repo param
    - if any of owner or repo param change, refetch the query and update cache
- TIP: always use a string as the query key
  - like "issues" above
  - avoid using numbers or keys as the first element in the query key array
    - const commentsQuery = useQuery([commentId], fetchComment)
    - const usersQuery = useQuery([userId], fetchuser)
    - userId and commentId could be the same value and they would overwrite cache
    - Instead do
      - const commentsQuery = useQuery(["comments", commentId], fetchComment)
      - const usersQuery = useQuery(["users", userId], fetchuser)
- any value that could change in the query function should be put somewhere in the query key array
  - could be numbers, strings or objects


## Query Functions

- any function that returns a promise is a valid query function
  - third party libraries -> axios, geolocation API, graphql-request
- in order to get the parameters used in the query function
  - extract it from the query keys array
  - it is part of the first object passed to the query function


## Custom Hooks for Queries

- when multiple components might want to use the same query(not just one component)
- write both the query key and query function in a custom hook
  - write it once and just call the hook
  - prevent mistakes when calling the useQuery function(maybe different query keys)