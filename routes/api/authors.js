const router = require('express').Router();
const { getAll, create, update, deleteById} = require('../../models/autores.model');



router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.post('/', async (req, res) =>{
    try{
        const [result] = await create(req.body);
        res.status(201).json({ message: 'Autor añadido correctamente', result });
        
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});

router.put('/:authorId', async (req, res) =>{
    try{
        const [result] = await update(req.params.authorId, req.body);
        res.json({ message: 'Autor modificado correctamente', result });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});


router.delete('/:authorId', async (req, res) =>{
    try{
        const [result] = await deleteById(req.params.authorId);
        res.json({ message: 'Autor eliminado correctamente', result });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
