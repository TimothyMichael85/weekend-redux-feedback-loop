const express = require('express');
const router = express.Router();
const pool = require('../pool');

//GET existing feedback info from  "prime_feedback" DB
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback:`;

    pool
        .query(queryText)
        .then (result => {
            res.send(result.row);
        }).catch(err => {
            console.log('error on router GET', err);
            res.sendStatus(500);
        })
})
//end GET


module.exports = router;