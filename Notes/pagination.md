# Pagination

- keep current page visible while loading the next page
  - using "keepPreviousData" option

- Issue: Pressing the next button before we know there is a next page
  - don't use isFetching(it will disable the button)
  - use the isPreviousData property
    - lets us know that it is showing the previous data while new data is fetching

- Prefetching Pagination Queries
  - prefetching the next page using useEffect
  - use queryClient.prefetchQuery to fetch next data