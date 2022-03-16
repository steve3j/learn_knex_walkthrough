/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'figaro', pet_type_id: '2'},
    {id: 2, name: 'fat sammY', pet_type_id: '3'},
    {id: 3, name: 'mochi', pet_type_id: '3'},
    {id: 4, name: 'cleo', pet_type_id: '4'}
  ]);
};
