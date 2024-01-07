const express = require('express');
const { get_random_flag } = require('../controllers/controller'); // Adjust the path as needed

const router = express.Router();

let counter = 1;

router.get('/', async (req, res) => {
  try {
    const data = await get_random_flag();
    res.render('index', {
      flag: data.flag.flag,
      capital: data.capital.capital,
      country: data.capital.country,
      counter: counter
    });
    console.log({
      flag: data.flag.flag,
      capital: data.capital.capital,
      country: data.capital.country,
      counter: counter
    })
  } catch (error) {
    console.error('Error in route:', error);
    res.status(500).send('Error occurred');
  }
});

router.post('/submit', async (req, res) => {
  try {
    const countryName = req.body;
  
    if (req.body.country == req.body.countryName || req.body.capital == req.body.capitalName){
      counter ++
    }else{
      counter = 1
    }

   

    // For now, just log and redirect to the home page
    console.log('Submitted country:', countryName);
    res.redirect('/');
  } catch (error) {
    console.error('Error in /submit route:', error);
    res.status(500).send('Error occurred');
  }
});

module.exports = router;
