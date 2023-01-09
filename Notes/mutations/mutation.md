# Mutations

- using useMutation to update state
  - manage mutations sent to the server
  - imperative - only fires when called

- mutation results are not cached

- Better user experience
  - invalidate cache in onSettled
    - is called when there is success or error
    - using query client
  - update cache in onSuccess
    - only when mutation is successful
    - gets data return


