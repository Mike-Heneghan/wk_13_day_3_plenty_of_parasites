const Countries = require('./models/countries.js');
const CountrySelectView = require('./views/country_select_view.js');
const CountriesGridView = require('./views/countries_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#countries');
  const countrySelectView = new CountrySelectView(element);
  countrySelectView.bindEvents();
  const countries = new Countries();
  countries.bindEvents();
});



//
// module.exports = app;
