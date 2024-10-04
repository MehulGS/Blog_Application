import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7890/BlogPersonalApp/blog/"
        );
        setPosts(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch posts");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post._id} className="list-group-item p-0">
              <div class="card">
                <div class="card-header">By: {post.author}</div>
                <div class="card-body">
                  <h5 class="card-title"><b><i>Title:</i></b>{post.title}</h5>
                  <p class="card-text">
                  {post.description.length > 10
                  ? `${post.description.substring(0, 10)}...`
                  : post.description}
                  </p>
                  <Link to={`/blogs/${post._id}`} className="btn btn-primary">
                  View Detail
                </Link>
                </div>
              </div>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homepage;
