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
<<<<<<< HEAD
        res.status(201).json({ message: 'Autor añadido correctamente', result });
=======
        const message = "Autor añadido correctamente"
        res.json({result, message});
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
        
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});

router.put('/:authorId', async (req, res) =>{
    try{
        const [result] = await update(req.params.authorId, req.body);
<<<<<<< HEAD
        res.json({ message: 'Autor modificado correctamente', result });
=======
        const message = "Autor modificado correctamente"
        res.json({result, message});
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
    }catch(err){
        res.status(500).json({ error: err.message });
    }
    
});


router.delete('/:authorId', async (req, res) =>{
    try{
        const [result] = await deleteById(req.params.authorId);
<<<<<<< HEAD
        res.json({ message: 'Autor eliminado correctamente', result });
=======
        const message = "Autor eliminado correctamente"
        res.json({result, message});
>>>>>>> 19fc81e9f91b23a74c4b98806def4ce70fc4b067
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;