module.exports = {
    'client': 'pg',
    'connection': {
        'user': 'postgres',
        'password': 'postgres',
        'host': 'localhost',
        'database': 'posts'
    },
    'migrations': {
        'tableName': 'knex_migrations'
    }
};
