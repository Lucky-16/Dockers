const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./managers.db");

db.serialize(() => {

db.run(`
CREATE TABLE IF NOT EXISTS managers(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT
)
`);

});

module.exports = db;