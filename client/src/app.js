const Countries = require('./models/countries.js');
const CountrySelectView = require('./views/country_select_view.js');
const CountriesGridView = require('./views/countries_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  console.log(countries);
});
//
// module.exports = app;
