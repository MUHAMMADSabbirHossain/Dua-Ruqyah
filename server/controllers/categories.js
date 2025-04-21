/* internal modules */
const { getCategories: dbGetCategories } = require(`../libraries/database`);

async function getCategories(req, res, next) {
    try {
        const response = await dbGetCategories(req.database);

        if (!response && response.length === 0) {
            return res.status(404).json({
                status: 404,
                message: `No categories found`,
            });
        }
        res.status(200).json({
            status: 200,
            message: `Categories fetched successfully`,
            data: response
        });
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        res.status(500).json({
            status: 500,
            message: `Internal server error`,
            error: error.message
        });
    }
}

/* exports modules */
module.exports = {
    getCategories,
};