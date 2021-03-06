const express = require('express');
const handler = require('./handler')

const router = express.Router()

router.route('/post').post(handler.addPost)
router.route('/post').get(handler.fetchPost)
router.route('/post/:id').get(handler.getPost)
router.route('/post/:id').put(handler.updatePost)
router.route('/post/:id').delete(handler.deletePost)


module.exports = router