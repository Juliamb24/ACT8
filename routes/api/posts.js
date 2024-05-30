const { getAllPosts, getPostsByAuthor, createPost, deletePosts, updatePost } = require('../../models/posts.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [result] = await getAllPosts();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/author/:authorId', async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const [posts] = await getPostsByAuthor(authorId);
        res.json(posts);
    } catch (err) {
        res.json({ error: err.message });    
    }
});

router.post('/', async (req, res) => {
    try {
      const postData = req.body;
      const result = await createPost(postData);
      res.status(201).json({ message: 'Post created successfully', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error: error.message });
    }
  });

  router.put('/:postsId', async (req, res) =>{
    try{
        const [result] = await updatePost(req.params.postsId, req.body);
        res.json(result);
    }catch(err){
        res.json({error: err.message});
    }
    
});



router.delete('/:postsId', async(req, res) =>{
    try{
        const [result] = await deletePosts(req.params.postsId);
        res.json(result);
    }catch(err){
        res.json({error: err.message});
    }
});




module.exports = router;