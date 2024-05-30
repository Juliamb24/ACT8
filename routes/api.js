const router = require('express').Router();


const apiAuthorsRouter = require('./api/authors');
const apiPostsRouter = require('./api/posts');



router.use('/posts', apiPostsRouter);
router.use('/authors', apiAuthorsRouter);


module.exports = router;