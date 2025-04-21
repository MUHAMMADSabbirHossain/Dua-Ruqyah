/* external modules */

/* internal modules */
const { getSubCategories: dbGetSubCategories } = require(`../libraries/database`)

async function getSubCategories(req, res, next) {
    try {
        const response = await dbGetSubCategories(req.database);

        if (!response && response.length === 0) {
            return res.status(404).json({
                status: 404,
                message: `No sub categories found.`,
            });
        } else {
            return res.status(200).json({
                status: 200,
                message: `Sub categories fetched successfully.`,
                count: response.length,
                data: response,
            });
        }

    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return res.status(500).josn({
            status: 500,
            message: `Internal Server Error`,
            error: error.message,
        });
    }
}

/* exports modules */
module.exports = {
    getSubCategories,
};