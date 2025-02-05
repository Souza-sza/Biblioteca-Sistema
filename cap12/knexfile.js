module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/editora.db3'
        },
       NullAsdesfault: true,
       migrations: {
           directory: './data/migrations' 
        },
        seeds: {
            directory: './data/seeds'
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
       
      },
    
      production: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      }
    
    
}

