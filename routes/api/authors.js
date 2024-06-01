const router = require('express').Router();
const { getAll, create, update, deleteById} = require('../../models/autores.model');



router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});



router.post('/', async (req, res) =>{
    try{
        const [result] = await create(req.body);
        const message = "Autor añadido correctamente"
        res.json({result, message});
        
    }catch(err){
        res.json({error: err.message});
    }
    
});

router.put('/:authorId', async (req, res) =>{
    try{
        const [result] = await update(req.params.authorId, req.body);
        const message = "Autor modificado correctamente"
        res.json({result, message});
    }catch(err){
        res.json({error: err.message});
    }
    
});


router.delete('/:authorId', async (req, res) =>{
    try{
        const [result] = await deleteById(req.params.authorId);
        const message = "Autor eliminado correctamente"
        res.json({result, message});
    }catch(err){
        res.json({error: err.message});
    }
});

module.exports = router;