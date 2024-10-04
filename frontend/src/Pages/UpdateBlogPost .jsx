import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const UpdateBlogPost = () => {
    const { id } = useParams(); // Get the ID from the URL parameters
    const navigate = useNavigate(); // Use useNavigate for navigation
    const [post, setPost] = useState({ title: '', description: '', author: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:7890/BlogPersonalApp/blog/${id}`); // Adjust the URL according to your API
                setPost(response.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:7890/BlogPersonalApp/blog/update/${id}`, post); // Adjust the URL according to your API
            if (response.status === 200) {
                navigate(`/blogs/${id}`); // Redirect to the blog post page after updating
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to update post');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Update Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={post.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Post</button>
            </form>
        </div>
    );
};

export default UpdateBlogPost;
