/* external modules */
const express = require(`express`);
const router = express.Router();

/* internal modules */
const { getAllDua, getDuaByCategoryId, getDuaBySubCategoryId } = require(`../controllers/dua`);

router.get(`/`, getAllDua);

router.get(`/by_category/:category_id`, getDuaByCategoryId);

router.get(`/by_sub_category/:sub_category_id`, getDuaBySubCategoryId);

/* exports modules */
module.exports = router;