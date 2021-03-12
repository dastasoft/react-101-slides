import React, { useEffect, useState } from 'react';

const PostFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(result => {
        setPosts(result);
      });
  }, []);

  return (
    <div>
      {posts && posts.length
        ? posts.map(post => (
            <div>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default PostFetch;
