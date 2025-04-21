/* external modules */
const express = require(`express`);
const router = express.Router();

/* internal modules */
const { getSubCategories, } = require(`../controllers/subCateroies`);

router.get(`/`, getSubCategories);

/* exports modules */
module.exports = router;