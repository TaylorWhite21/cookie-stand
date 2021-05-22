'use strict';

// Global Variables
const storesTable = document.querySelector('table');
const myForm = document.getElementById('myForm');
const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

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

  // 2D array to calculate totals of each store per hour
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

// Renders input forms and submit button(can be broken down into smaller functions)
let renderForm = function () {
  //creates beginnings of form inputs
  let fieldSet = document.createElement('fieldset');
  myForm.appendChild(fieldSet);
  console.log(fieldSet);

  let legend = document.createElement('legend');
  fieldSet.appendChild(legend);

  //creates first label to display store name
  let storelabel = document.createElement('label');
  storelabel.innerHTML = 'Store Name';
  legend.appendChild(storelabel);

  // creates input form for store name
  let formStoreName = document.createElement('input');
  formStoreName.setAttribute('type', 'text');
  formStoreName.setAttribute('name', 'store');
  formStoreName.setAttribute('required', 'true');
  storelabel.appendChild(formStoreName);

  // creates label for min customers
  let minLabel = document.createElement('label');
  minLabel.innerHTML = 'Minimum Customers';
  legend.appendChild(minLabel);

  // creates form and allows only numbers and decimals
  let formMinCust = document.createElement('input');
  formMinCust.setAttribute('type', 'number');
  formMinCust.setAttribute('min', 0);
  formMinCust.setAttribute('max', 'any');
  formMinCust.setAttribute('step', .1);
  formMinCust.setAttribute('name', 'min');
  minLabel.appendChild(formMinCust);

  // creates label for max customers
  let maxLabel = document.createElement('label');
  maxLabel.innerHTML = 'Maximum Customers';
  legend.appendChild(maxLabel);

  // creates form and allows only numbers and decimals
  let formMaxCust = document.createElement('input');
  formMaxCust.setAttribute('type', 'number');
  formMinCust.setAttribute('min', 0);
  formMinCust.setAttribute('max', 'any');
  formMinCust.setAttribute('step', .1);
  formMaxCust.setAttribute('name', 'max');
  maxLabel.appendChild(formMaxCust);

  // creates label for Average Cookies Sold
  let avgLabel = document.createElement('label');
  avgLabel.innerHTML = 'Average Cookies Sold';
  legend.appendChild(avgLabel);

  // creates form and allows only numbers and decimals
  let formAvgSold = document.createElement('input');
  formAvgSold.setAttribute('type', 'number');
  formMinCust.setAttribute('min', 0);
  formMinCust.setAttribute('max', 'any');
  formMinCust.setAttribute('step', .1);
  formAvgSold.setAttribute('name', 'avg');
  avgLabel.appendChild(formAvgSold);

  //creates submit button
  let submitForm = document.createElement('button');
  submitForm.setAttribute('type', 'submit');
  submitForm.setAttribute('value', 'Submit');
  submitForm.setAttribute('class', 'buttonHover');
  submitForm.innerHTML = 'Submit';
  avgLabel.appendChild(submitForm);
};

//removes footer after submit pressed
let removeFooter = function () {
  document.getElementById('salesTable').deleteTFoot();
};

// Handles submission of inputs and replaces the footer with new information
function submitHandler (event) {
  event.preventDefault();
  let storeName = event.target.store.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgSold = parseInt(event.target.avg.value);
  new Stores(storeName, minCust, maxCust, avgSold);
  removeFooter();
  renderFooter();
}

myForm.addEventListener('submit', submitHandler);

//Renders page
renderForm();
renderHeader();
new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 2.3);
new Stores('Paris', 11, 38, 2.3);
new Stores('Lima', 11, 38, 2.3);
renderFooter();
