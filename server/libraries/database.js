/* external modules */
const path = require(`path`);
const sqlite3 = require(`sqlite3`).verbose();

const databasePath = path.join(__dirname, process.env.DB_PATH);

/* database connection */
function databaseConnection() {
    return new Promise(function (resolve, reject) {
        new sqlite3.Database(databasePath, function (error) {
            if (error) {
                // console.error(`Error opening database: ${error.message}`);
                reject(error);
            } else {
                // console.log(`Connected to the database. Database path: ${this.filename}`);
                resolve(this);
            }
        });
    });
};

/* database queries */
function getAllDua(database) {
    const sqlQuery = `SELECT * FROM dua`;

    return new Promise(function (resolve, reject) {
        database.all(sqlQuery, [], function (error, rows) {
            if (error) {
                // console.error(`Error fetching data: ${error.message}`);
                reject(error);
            } else {
                // console.log(rows);
                resolve(rows);
            }
        });
    });
}

function getCategories(database) {
    const sqlQuery = `SELECT * FROM category`;

    return new Promise(function (resolve, reject) {
        database.all(sqlQuery, [], function (error, rows) {
            if (error) {
                // console.error(`Error fetching data: ${error.message}`);
                reject(error);
            } else {
                // console.log(rows);
                resolve(rows);
            }
        });
    });
}

function getSubCategories(database) {
    const sqlQuery = `SELECT * FROM sub_category`;

    return new Promise(function (resolve, reject) {
        database.all(sqlQuery, [], function (error, rows) {
            if (error) {
                // console.error(`Error fetching data: ${error.message}`);
                reject(error);
            } else {
                // console.log(rows);
                resolve(rows);
            }
        });
    });
}

function getDuaByCategoryId(database, category_id) {
    const sqlQuery = `SELECT * FROM dua WHERE cat_id = ${category_id}`;

    return new Promise(function (resolve, reject) {
        database.all(sqlQuery, [], function (error, rows) {
            if (error) {
                // console.error(`Error fetching data: ${error.message}`);
                reject(error);
            } else {
                // console.log(rows);
                resolve(rows);
            }
        })
    });
}

function getDuaBySubCategoryId(database, sub_category_id) {
    const sqlQuery = `SELECT * FROM dua WHERE subcat_id = ${sub_category_id}`;

    return new Promise(function (resolve, reject) {
        database.all(sqlQuery, [], function (error, rows) {
            if (error) {
                // console.error(`Error fetching data: ${error.message}`);
                reject(error);
            } else {
                // console.log(rows);
                resolve(rows);
            }
        })
    });
};

/* exports modules */
module.exports = {
    databaseConnection,
    getAllDua,
    getCategories,
    getSubCategories,
    getDuaByCategoryId,
    getDuaBySubCategoryId,
};
