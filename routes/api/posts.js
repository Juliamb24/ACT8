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
        const [result] = await createPost(req.body);
        const message = "Publicación añadida correctamente"
        res.json({result, message});
        
    } catch (err) {
        res.json({ error: err.message });
    }
});



  router.put('/:postsId', async (req, res) =>{
    try{
        const [result] = await updatePost(req.params.postsId, req.body);
        const message = "Publicación modificada correctamente"
        res.json({result, message});
    }catch(err){
        res.json({error: err.message});
    }
    
});



router.delete('/:postsId', async(req, res) =>{
    try{
        const [result] = await deletePosts(req.params.postsId);
        const message = "Publicación eliminada correctamente"
        res.json({result, message});
    }catch(err){
        res.json({error: err.message});
    }
});




module.exports = router;