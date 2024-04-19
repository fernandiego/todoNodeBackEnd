const knex = require("knex")


const config = {
    connection: 'data.db',
    client: 'sqlite3',
}
const db = knex(config)
const initdb = async () => {
    console.log("check database state")
    return db.raw(`
        create table if not exists todos(
            id integer primary key autoincrement,
            description text not null,
            done boolean default false,
            created timestamp default CURRENT_TIMESTAMP
        );
    `)
}
exports.db = db
exports.initdb = initdb

