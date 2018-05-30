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


module.exports = Countries;
