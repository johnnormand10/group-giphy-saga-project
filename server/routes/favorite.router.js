const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
	const queryText = 'SELECT * FROM "favImages";';
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log('Error completing Select favorites query', err);
			res.sendStatus(500);
		});
});

// add a new favorite
router.post('/', (req, res) => {
  // making req.body set to new value
  const newFavorite = req.body.url;
  const newTitle = req.body.alt;
  // console.log('url to save:', newFavorite)

  const queryText = `
    INSERT INTO "favImages" ("name", "url" )
    VALUES ($1, $2)
  `;
  const queryValues = [newTitle, newFavorite]
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201); })
  .catch((err) => {
    console.log('Error completing POST query', err)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
	// req.body should contain a category_id to add to this favorite image

  console.log('in PUT fav router req.body', req.body.categoryId);
  console.log('in PUT fav router req.params', req.body.id);

  const queryText = `
    UPDATE "favImages"
    SET "categoryId" = $1
    WHERE id = $2;
  `;

  const queryParams = [
    req.body.categoryId, req.body.id
  ];

  pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
	res.sendStatus(200);
});

module.exports = router;
