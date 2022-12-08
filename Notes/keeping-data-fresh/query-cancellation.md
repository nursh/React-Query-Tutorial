# Query Cancellation

- Metered internet connections and low-powered devices affect queries
  - try to keep costs as low as possible
- ReactQuery uses the AbortController API
  - by passing the signal to fetch as a property
- Cancelling query manually
  - using query client's cancelQueries method