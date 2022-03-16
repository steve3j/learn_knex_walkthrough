// app.js
const { response } = require('express');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    // .from('pet')
    // .then(data => res.status(200).json(data))
    
    .then(pets => {
        
        console.log('here')
        var petNames = pets.map(pet => pet.name)
        
        console.log('here22')
        res.json(petNames);
        
        console.log('here3')
    })
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});