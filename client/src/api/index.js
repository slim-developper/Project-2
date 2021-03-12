import axios from 'axios';

const url = 'http://localhost:8001';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.post(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.post(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);


export const signIn = (formData) => url.post('/user/signin', formData);
export const signUp = (formData) => url.post('/user/signup', formData);
