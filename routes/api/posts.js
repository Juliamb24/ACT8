const { getAllPosts, getPostsByAuthor, createPost, deletePosts, updatePost } = require('../../models/posts.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [result] = await getAllPosts();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/author/:authorId', async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const [posts] = await getPostsByAuthor(authorId);
    
         if (posts === undefined || null) {
            return res.status(404).json({ error: 'El autor no existe' });
        }


        if (posts.length === 0) {
            return res.json({ message: 'No se encuentran publicaciones de este autor' });
        }

        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });   
    }
});


router.post('/', async (req, res) => {
    try {
        const [result] = await createPost(req.body);
        res.status(201).json({ message: 'Autor añadido correctamente', result });
        
    } catch (err) {
        res.status(500).json({ error: err.message });   
    }
});



  router.put('/:postsId', async (req, res) =>{
    try{
        const [result] = await updatePost(req.params.postsId, req.body);
        res.json({ message: 'Autor modificado correctamente', result });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});



router.delete('/:postsId', async(req, res) =>{
    try{
        const [result] = await deletePosts(req.params.postsId);
        res.json({ message: 'Autor eliminado correctamente', result });

    }catch(err){
        res.status(500).json({ error: err.message });
    }
});




module.exports = router;
