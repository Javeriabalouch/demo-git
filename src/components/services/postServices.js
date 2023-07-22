import api from "./api";


const postServices = {
    // Create Post
    createPost: async (post) => {
        const response = await api.post('/posts', post);
        return response.data;
    },

    // Retrieve all posts
    getAllPosts: async () => {
        const response = await api.get('/posts');
        return response.data;
    },

    // Retrieve a specific post
    getPost: async (postId) => {
        const response = await api.get(`/posts/${postId}`);
        return response.data;
    },

    // Update a post
    updatePost: async (postId, updatedPost) => {
        const response = await api.put(`/posts/${postId}`, updatedPost);
        return response.data;
    },

    // Delete a post
    deletePost: async (postId) => {
        const response = await api.delete(`/posts/${postId}`);
        return response.data;
    }
}

export default postServices;
