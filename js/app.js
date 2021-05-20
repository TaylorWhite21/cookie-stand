'use strict';

// const myContainer = document.getElementById('container');
// Global Variables
const storesTable = document.querySelector('table');
const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let allStoresTotalArray = [
  []
];

// Constructor function to create stores
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

// Method that generates random number of customers
Stores.prototype.genRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

// Method that calculates cookies sold per hour and pushes into array
Stores.prototype.calcCookiesSoldPerHour = function () {
  for (let i = 0; i < hoursArray.length; i++){
    let custOnHour = this.genRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
    this.cookiesSoldPerHourArray.push(cookiesSoldThisHour);
    this.dailyTotal += cookiesSoldThisHour;
  }
};

// Creates table on sales page
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

// Renders table header
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

// Renders table footer
let renderFooter = function (){
  let grandTotal = 0;
  let tfoot = document.createElement('tfoot');
  storesTable.appendChild(tfoot);
  let tableRow = document.createElement('tr');
  tfoot.appendChild(tableRow);

  let tableHeaderCell = document.createElement('th');
  tableHeaderCell.textContent = 'Hourly Totals';
  tableRow.appendChild(tableHeaderCell);

  for (let i = 0; i < hoursArray.length; i++){ // slow
    let tableData = document.createElement('td');
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++){ // fast
      hourTotal += allStores[j].cookiesSoldPerHourArray[i];
    }
    grandTotal += hourTotal;
    tableData.textContent = hourTotal;
    tableRow.appendChild(tableData);
  }

  let tableData = document.createElement('td');
  tableData.textContent = grandTotal;
  tableRow.appendChild(tableData);
};

renderHeader();
new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 2.3);
new Stores('Paris', 11, 38, 2.3);
new Stores('Lima', 11, 38, 2.3);
renderFooter();



// Decided not to use
// renderHeader();
// renderFooter();
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
