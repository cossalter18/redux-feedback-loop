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


//setup a post
router.post('/feedback', (req, res) =>{
    console.log('in POST');
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    const feedback =req.body
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) =>{
        console.log('Error in Post');
        res.sendStatus(500)   
    })
})
module.exports = router;