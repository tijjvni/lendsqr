// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  
  development: {
    client: 'postgresql',
    connection: {
      host : 'ec2-3-209-61-239.compute-1.amazonaws.com',
      port : '5432',
      database: 'de3k1k9e4f80n9',
      user:     'rqukllqzpgvygb',
      password: '7f9d62394009f7ad6907c3d855157289506060c6d060b5cbade646b2b6f532c6'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
      
    }
  },

};
