
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      let id = 12345;
      const seeds = [];
      for(let i = 0; i < 10; i++)
      {
        seeds.push({userId: id});
        id += 1;
      }
      return knex('users').insert(seeds);
    });
};
