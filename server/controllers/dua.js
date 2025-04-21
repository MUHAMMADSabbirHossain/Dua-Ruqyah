
/* internal modules */
const {
    getAllDua: dbGetAllDua,
    getDuaByCategoryId: dbGetDuaByCategoryId,
    getDuaBySubCategoryId: dbGetDuaBySubCategoryId
} = require(`../libraries/database`);

async function getAllDua(req, res, next) {
    try {
        const response = await dbGetAllDua(req.database);

        if (!response && response.length === 0) {
            return res.status(404).json({
                status: 404,
                message: `No dua found.`,
            });
        } else {
            return res.status(200).json({
                status: 200,
                message: `Dua fetched successfully.`,
                count: response.length,
                data: response,
            });
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return res.status(500).json({
            status: 500,
            message: `Internal server error.`,
            error: error.message,
        });
    }
}

async function getDuaByCategoryId(req, res, next) {
    try {
        console.log(req.params.category_id);
        const response = await dbGetDuaByCategoryId(req.database, req.params.category_id);

        if (!response && response.length === 0) {
            return res.status(404).json({
                status: 404,
                message: `No dua found.`,
            });
        } else {
            return res.status(200).json({
                status: 200,
                message: `Dua fetched by category id successfully.`,
                count: response.length,
                data: response,
            });
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return res.status(500).json({
            status: 500,
            message: `Internal server error.`,
            error: error.message,
        });
    }
}

async function getDuaBySubCategoryId(req, res, next) {
    try {
        const response = await dbGetDuaBySubCategoryId(req.database, req.params.sub_category_id);

        if (!response && response.length === 0) {
            return res.status(404).json({
                status: 404,
                message: `No dua found.`,
            });
        } else {
            return res.status(200).json({
                status: 200,
                message: `Dua fetched by sub category id successfully.`,
                count: response.length,
                data: response,
            });
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return res.status(500).json({
            status: 500,
            message: `Internal server error.`,
            error: error.message,
        });
    }
}

/* exports modules */
module.exports = {
    getAllDua,
    getDuaByCategoryId,
    getDuaBySubCategoryId
};