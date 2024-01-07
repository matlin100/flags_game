const {
    queryCapitalsDatabase,
    queryCapitalsById,
    queryFlagsDatabase,
    queryFlagsByCountryOrCapital
  } = require('../services/flagsService')


  const get_random_flag = async () => {
     try {
       const all_capitals_result = await queryCapitalsDatabase();
       const all_capitals = all_capitals_result.rows;
   
   
       if (all_capitals.length === 0) {
         throw new Error('No capitals found in the database');
       }
   
       const randomIndex = Math.floor(Math.random() * all_capitals.length);
      
   
       const capital_result = await queryCapitalsById(all_capitals[randomIndex].id);
       const capital = capital_result.rows[0];
       if (!capital) {
         throw new Error('Capital not found');
       }
   
       const flag_result = await queryFlagsByCountryOrCapital(capital.country);
       const flag = flag_result.rows[0];
       if (!flag) {
         throw new Error('Flag not found');
       }
   
       return { flag, capital };
     } catch (error) {
       console.error('Error in get_random_flag:', error);
       throw error; // or handle the error as needed
     }
   };
   

  module.exports ={ get_random_flag };


