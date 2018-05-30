const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function(element) {
  this.element = element;
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:drop-down-data-loaded', (evt) => {
  const countryNames = evt.detail;
  this.populateDropDown(countryNames);
});

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('CountrySelectView:selected-country', selectedIndex);
  });

};

CountrySelectView.prototype.populateDropDown = function (countryNames) {
  countryNames.forEach((country, index) => {
  const option = document.createElement('option')
  option.textContent = country;
  option.value = index;
  this.element.appendChild(option);
  });
};



module.exports = CountrySelectView;
