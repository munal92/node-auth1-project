
exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.string("username",128).notNullable();
        tbl.string("password",128).notNullable();
        tbl.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('users')
};
