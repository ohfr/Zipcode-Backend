
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zip').del()
    .then(function () {
      // Inserts seed entries
      return knex('zip').insert([
        {city: 'Roanoke', zip: 24012, delivery: 'HD'},
        {city: 'Roanoke', zip: 24014, delivery: 'HD'},
        {city: 'Axton', zip: 24054, delivery: 'HD'},
      ]);
    });
};
