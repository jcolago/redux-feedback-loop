//Bringing in express and router for use
const express = require('express');
const router = express.Router();
//Hooks up pook for use
const pool = require('../modules/pool');

//Get route for use on /admin
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DSC;';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting feedback', error);
      res.sendStatus(500);
    });
  });

  //Post route to get new data to database
  router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [Number(newFeedback.feeling), Number(newFeedback.understanding), Number(newFeedback.support), newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new book`, error);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;