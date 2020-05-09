const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//setup a get route to get Feedback
router.get('/', (req, res) =>{
    console.log('GET feedback');
    pool.query('SELECT * from "feedback";').then((result) =>{
        res.send(result.rows);
    }).catch((error) =>{
        console.log('Error GET', error);
        res.sendStatus(500)
    })   
})

//POST
router.post('/', (req, res) =>{
    console.log('In Post FeedbackRouter');
    let queryText=`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    const values = [req.body] 
    pool.query(queryText, values)
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) =>{
        console.log('error in POST', error);
        res.sendStatus(500)
        
    })
    
})


module.exports = router;