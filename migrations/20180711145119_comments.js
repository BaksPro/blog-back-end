exports.up = function (knex) {
    return knex.schema.createTable('comments', function (table) {
        table.increments('id').primary();
        table.string('text').notNull();
        table.integer('post_id').notNullable().unsigned().index().references('id').inTable('posts');
        table.integer('user_id').notNullable().unsigned().index().references('id').inTable('users');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').nullable().defaultTo(null);
    })
        .then(function () {
        });
};


exports.down = function (knex) {
    return knex.schema.dropTable('comments');
};
