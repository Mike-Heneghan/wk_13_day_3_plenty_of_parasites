const PubSub = require('../helpers/pub_sub.js');

const Countries = function (){

  this.countries = [
    {
      name: "India",
      parasite: "Malaria"
    },
    {
      name: "Laos",
      parasite: "Schistosomiasis"
    },
    {
      name: "Guatemala",
      parasite: "Leishmaniasis"
    },
    {
      name: "USA",
      parasite: "Trichomoniasis"
    },
    {
      name: "Austria",
      parasite: "Echinococcus multilocularis"
    }
  ];

};

Countries.prototype.bindEvents = function () {
  const payload = [];
  this.countries.forEach((country) => {
    payload.push(country.name);
  })
  PubSub.publish('Countries:drop-down-data-loaded', (payload));
  this.selectedCountryToDb();
};

Countries.prototype.selectedCountryToDb = function () {
  PubSub.subscribe('CountrySelectView:selected-country', (evt) => {
    const selectedIndex = evt.detail;
    const selectedCountry = this.countries[selectedIndex];
    console.log(selectedCountry);
  })
};

module.exports = Countries;
