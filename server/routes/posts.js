import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.post('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/likePost', likePost);

export default router;