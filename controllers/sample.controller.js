const { response, request } = require('express');

const getSampleController = (req= request, res= response)=> {
    const { query } = req; // get all query params
    
    res.status(200).json({ 
        ok:true,
        query
    });
} 

const postSampleController = (req= request, res= response)=> {
    const { body } = req; // get body from request
    res.status(201).json({ 
        ok:true,
        body
    })
} 
const putSampleController = (req= request, res= response)=> {
    
    const { id } = req.params;
    
    res.status(200).json({ 
        ok:true,
        msg: `resoruce with ID ${ idParam } has been updated`
    })
} 
const deleteSampleController = (req, res= response)=> {
    res.status(204).json({ 
        ok:true,
        msg: 'delete API'
    })
} 


module.exports = {
    getSampleController,
    postSampleController,
    putSampleController,
    deleteSampleController,
}