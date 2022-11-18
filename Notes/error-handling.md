# Error Handling

- Reasons for failure
  - network error
  - Invalid query parameters
  - Server failures
  - Insufficient permissions

- For making Resilient applications
  - handle errors properly

- Any promise rejection is an error for react-query
- a HTTP 500 error does not cause fetch to reject
  - server error
  - take care to reject promise
- We can set how many times for a query to retry fetching a query

- Try to handle errors using ErrorBoundary feature in React
  - enable the useErrorBoundary in react-query
  - for declarative handling of error

- Use the isError property for handling errors imperatively
  - for toasts and stuff

- if a query fails, you can still show the previously cached data
  - so the user does not see a blank screen
  - does not work with error boundaries(it replaces the component with a new data)
  - think about your use case