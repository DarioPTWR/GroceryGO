const axios = require('axios');
require('dotenv').config();
var spoonacularAPIKey = process.env.SPOONACULAR_API;

const spoonacularAPI = {
  getInfoByUPC: function(upc, callback){
    return axios.get(
      `https://api.spoonacular.com/food/products/upc/${upc}?apiKey=${spoonacularAPIKey}`
    )
      .then(res => callback(null, res.data))
      .catch(err => callback(err, null))
  }
}

module.exports = spoonacularAPI;