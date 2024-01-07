const { pool } = require('../DB/DB'); // Adjust the path as necessary



const queryFlagsDatabase = async () => {
    try {
      return await pool.query('SELECT * FROM flags ORDER BY id ASC '); // Replace 'yourTable' with your table name
    } catch (err) {
      return err ;
    }
  };
  
  
  const queryCapitalsDatabase = async () => {
    try {
      return  await pool.query('SELECT * FROM capitals ORDER BY id ASC '); // Replace 'yourTable' with your table name
     
    } catch (err) {
      return err;
    }
  };
  
  const queryCapitalsById = async (id) => {
    try {
      return await pool.query('SELECT * FROM capitals WHERE id = $1', [id]); // Replace 'yourTable' with your table name
    } catch (err) {
      return err;
    }
  };
  
  const queryFlagsByCountryOrCapital = async (country) => {
    try {
      return await pool.query('SELECT * FROM flags WHERE name = $1', [country]); // Replace 'yourTable' with your table name
    } catch (err) {
      return err;
    }
  };
  
  
  module.exports = {
    queryCapitalsDatabase,
    queryCapitalsById,
    queryFlagsDatabase,
    queryFlagsByCountryOrCapital
  };
  