# Introduction to React-Query

- Handle server state different from client state
- Server state is not the same as client state
- Client state
  - redux
  - local storage
  - useState hook
  - best for UI State
  - Temporary, Synchronous, client owned
- Server state
  - more persisted data
  - can be changed at any time(owned by many users)
  - Asynchronous
  - could be out of date any time

- Network request things to look out for
  - loading -> before data is fetched
  - users with poor internet connection or other errors
    - error