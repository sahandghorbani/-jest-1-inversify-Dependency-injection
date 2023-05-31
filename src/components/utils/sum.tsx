import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function Sum() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const add = (a: number, b: number, mode: string): number => {
    return mode === "add" ? a + b : a * b;
  };

  return (
    <div>
      <button onClick={() => add(5, 6, "add")}>add</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
