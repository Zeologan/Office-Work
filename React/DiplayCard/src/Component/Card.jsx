import React, { useState, useEffect } from "react";

function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className="bg-white py-3" key={post.id}>
          <div className="mx-auto max-w-7xl p-8 lg:px-8 border-b-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {post.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
