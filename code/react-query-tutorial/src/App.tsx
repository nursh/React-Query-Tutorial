import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PostData, QueryError } from './types';



function fetchPost(postId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json());
}

type PostProps = {
  postId: number;
}

function Post({ postId }: PostProps) {
  const postQuery = useQuery<PostData, QueryError>([postId], () => fetchPost(postId));
  console.log(postQuery);
  const post = postQuery.data;

  if (postQuery.isLoading) {
    return <p>Loading...</p>
  }

  if (postQuery.isError) {
    return <p>Something went wrong... {postQuery.error.message}</p>
  }

  if (post) {
    return (
      <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </>
    )
  }

  return (
    <>Post with id: {postId} does not exist</>
  )
}

function App() {
  return (
    <Post
      postId={101}
    />
  )
}

export default App
