import Knex from 'knex';
import Bookshelf from 'bookshelf';
import config from '../config';


let knex = Knex(config.get('db'));
let bookshelf = Bookshelf(knex);
bookshelf.plugin(['registry']);

console.log(config);


export default bookshelf;
