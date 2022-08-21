const express = require('express');
const router = express.Router();
const pool = require('../pool');

//GET existing feedback info from "prime_feedback" DB
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback:`;

    pool
        .query(queryText)
        .then (result => {
            res.send(result.row);
        }).catch(err => {
            console.log('error on router GET', err);
            res.sendStatus(500);
        });
});
//end GET

//POST new survey to DB
router.post('/', (req,res) => {
    const newSurvey = req.body;
    console.log('New Survey Results ',newSurvey);
    
    const queryText =`
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
        `;
    pool.query(queryText,[
        Number(newSurvey.feeling),
        Number(newSurvey.understanding),
        Number(newSurvey.support),
        newSurvey.comments])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST to DB', error)
            res.sendStatus(500);
        });
});
//end POST

module.exports = router;