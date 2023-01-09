# Optimistic updates

- using fake data to trick users 
- create fake data(with some missing details)
  - add it to the onMutate function(or wherever)
  - add a rollback after the onMutate
    - the return of an onMutate is available in onSuccess and onError
    - either remove the fake data
    - or set the entire cache to its original