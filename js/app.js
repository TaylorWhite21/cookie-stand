'use strict';

// const myContainer = document.getElementById('container');
const storesTable = document.querySelector('table');
const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

function Stores (name, minCustomers, maxCustomers, avgCookieSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.cookiesSoldPerHourArray = [];
  this.dailyTotal = 0;
  this.hourlyTotal = 0;
  this.render();
  allStores.push(this);
}

Stores.prototype.genRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};
Stores.prototype.calcCookiesSoldPerHour = function () {
  for (let i = 0; i < hoursArray.length; i++){
    let custOnHour = this.genRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
    this.cookiesSoldPerHourArray.push(cookiesSoldThisHour);
    this.dailyTotal += cookiesSoldThisHour;
  }
};
Stores.prototype.render = function () {
  this.calcCookiesSoldPerHour();
  let tableRow = document.createElement('tr');
  storesTable.appendChild(tableRow);

  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (let j = 0; j < hoursArray.length; j++){
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldPerHourArray[j];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.dailyTotal;
  tableRow.appendChild(tableData);
};

let renderHeader = function (){
  let tableRow = document.createElement('tr');
  storesTable.appendChild(tableRow);
  let tableData = document.createElement('th');
  tableRow.appendChild(tableData);

  for (let j = 0; j < hoursArray.length; j++){
    let tableData = document.createElement('th');
    tableData.textContent = hoursArray[j];
    tableRow.appendChild(tableData);
  }

  tableData = document.createElement('td');
  tableData.textContent = 'Daily Location Total ';
  tableRow.appendChild(tableData);

};

let renderFooter = function (){
  let tableRow = document.createElement('tfoot');
  storesTable.appendChild(tableRow);
  let tableData = document.createElement('tr');
  tableRow.appendChild(tableData);

  tableData = document.createElement('th');
  tableData.textContent = 'Hourly Totals';
  tableRow.appendChild(tableData);

  for (let j = 0; j < hoursArray.length; j++){
    let tableData = document.createElement('td');
    tableData.textContent = 'Stuff';
    tableRow.appendChild(tableData);
  }

  tableData = document.createElement('tfoot');
  tableData.textContent = 'All stores total';
  tableRow.appendChild(tableData);
};

renderHeader();
renderFooter();
new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 2.3);
new Stores('Paris', 11, 38, 2.3);
new Stores('Lima', 11, 38, 2.3);



// Decided not to use
// renderHeader();
// renderFooter();
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
