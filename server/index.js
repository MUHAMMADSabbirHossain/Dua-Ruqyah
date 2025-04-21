/* external modules */
const express = require(`express`);
const app = express();
require(`dotenv`).config();
const cors = require(`cors`);
const port = process.env.PORT || 3000;

/* internal modules */
const { databaseConnection, } = require(`./libraries/database`);
const duaRouter = require(`./routes/dua`);
const categoriesRouter = require(`./routes/categories`);
const subCategoriesRouter = require(`./routes/subCategories`);

/* middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`public`));

/* database connection */
let database;
(async function () {
    try {
        database = await databaseConnection();
    } catch (error) {
        console.error(`Error opening database: ${error.message}`);
    }
})();

/* app.get(`/all_dua`, (req, res) => {

    database.all(`SELECT * FROM dua`, [], (error, rows) => {
        if (error) {
            console.error(`Error fetching data: ${error.message}`);
        } else {
            console.log(rows);
        }
    });
}) */

/* app.get("/all_dua", (req, res) => {
    const sqlQuery = "SELECT * FROM dua"; // Providing table name

    database.all(sqlQuery, [], (err, rows) => {
        if (err) {
            console.error("Error while querying dua data:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows); // Sending the rows as JSON response
        }
    });
});
 */

/* app.get(`/all_dua`, async (req, res) => {
    try {
        const allDua = await getAllDua(database);
        res.json(allDua);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
}); */


/* route handlers */
app.use(`/api/v1/all_dua`, function (req, res, next) {
    req.database = database;
    return duaRouter(req, res, next);
});

app.use(`/api/v1/categories`, function (req, res, next) {
    req.database = database;
    return categoriesRouter(req, res, next);
});


app.use(`/api/v1/sub_categories`, function (req, res, next) {
    req.database = database;
    return subCategoriesRouter(req, res, next);
});

/* server listening */
app.listen(port, () => {
    console.log(`The ${process.env.APP_NAME} server is Listening on port: ${port}`);
});