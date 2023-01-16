# Infinite Queries

- infinite queries like pinterest
  - load data as the user scrolls to the bottom of the page
  - or when they click a show more button
- useInfiniteQuery
  - the query functions receives an extra value called pageParam 
  - using the getNextPageParam option, we get the pageParam
    - lastPage - last page that was fetched
    - pages - the list of pages that have been fetched
  - returns pages property appended to its data property