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


// const result = await getAuthorById(authorId); 

// if (!result || result.length === 0) {
//     return res.status(404).json({ error: 'Publicación no encontrada' });
// }

// res.json(result);
// } catch (err) {
// res.status(500).json({ error: err.message });
// }

router.post('/', async (req, res) => {
    try {
        const [result] = await createPost(req.body);
<<<<<<< HEAD
        res.status(201).json({ message: 'Autor añadido correctamente', result });
        
    } catch (err) {
        res.status(500).json({ error: err.message });   
=======
        const message = "Publicación añadida correctamente"
        res.json({result, message});
        
    } catch (err) {
        res.json({ error: err.message });
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
    }
});



  router.put('/:postsId', async (req, res) =>{
    try{
        const [result] = await updatePost(req.params.postsId, req.body);
<<<<<<< HEAD
        res.json({ message: 'Autor modificado correctamente', result });
=======
        const message = "Publicación modificada correctamente"
        res.json({result, message});
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});



router.delete('/:postsId', async(req, res) =>{
    try{
        const [result] = await deletePosts(req.params.postsId);
<<<<<<< HEAD
        res.json({ message: 'Autor eliminado correctamente', result });

=======
        const message = "Publicación eliminada correctamente"
        res.json({result, message});
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});




module.exports = router;