/* external modules */
const express = require(`express`);
const router = express.Router();

/* internal modules */
const { getCategories } = require(`../controllers/categories`);

router.get(`/`, getCategories);

/* exports modules */
module.exports = router;