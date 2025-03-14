const { Router } = require('express');

const { 
    getSampleController, 
    postSampleController, 
    putSampleController, 
    deleteSampleController 
} = require('../controllers/sample.controller');

const router = Router();

//sample from http request: 
router.get('/', (req, res) => getSampleController( req, res ) );

router.post('/', (req, res) => postSampleController(req, res ));

router.put('/:id', (req, res) => putSampleController(req, res)); // sample with segment param

router.delete('/', (req, res) => deleteSampleController(req, res));

module.exports = router;