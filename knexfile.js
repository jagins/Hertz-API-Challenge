require('dotenv').config()
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/hertz.db3'
    },

    migrations: {
        directory: './data/migrations'
    },

    seeds: {
        directory: './data/seeds'
    },

    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
        }
    }
  },


  production: {
    client: 'pg',
    ssl: true,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};