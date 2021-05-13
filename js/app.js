'use strict';

console.log('hello');
// const myContainer = document.getElementById('container');
const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');

let seattleStore = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgavgCookieSales: 6.3,
  dailyTotal: 0,
  cookiesSoldPerHourArray: [],
  hoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function() {
    for (let i = 0; i < this.hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgavgCookieSales);
      this.cookiesSoldPerHourArray.push(`${this.hoursArray[i]}: ${cookiesSoldThisHour}`);
      let li = document.createElement('li');
      li.textContent = `(${this.hoursArray[i]}: ${cookiesSoldThisHour}) Cookies were sold`;
      // this.dailyTotal += totalSales;
      seattleList.appendChild(li);
    }
    // This will be used in the future
    // let totalSales = document.createElement('li');
    // totalSales.textContent = `Todays sales total was: ${this.dailyTotal}`;
    // seattleList.appendChild(totalSales);
    return this.cookiesSoldPerHourArray;
  },
};

seattleStore.calcCookiesSoldPerHour();

let tokyoStore = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgavgCookieSales: 1.2,
  dailyTotalOfCustomers: 0,
  cookiesSoldPerHourArray: [],
  hoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function() {
    for (let i = 0; i < this.hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgavgCookieSales);
      this.cookiesSoldPerHourArray.push(`${this.hoursArray[i]}: ${cookiesSoldThisHour}`);
      let li = document.createElement('li');
      li.textContent = `(${this.hoursArray[i]}: ${cookiesSoldThisHour}) - Cookies were sold`;
      tokyoList.appendChild(li);
    }
    return this.cookiesSoldPerHourArray;
  },

};
console.log(tokyoStore);
tokyoStore.calcCookiesSoldPerHour();

let dubaiStore = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  dailyTotalOfCustomers: 0,
  cookiesSoldPerHourArray: [],
  hoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function() {
    for (let i = 0; i < this.hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
      this.cookiesSoldPerHourArray.push(`${this.hoursArray[i]}: ${cookiesSoldThisHour}`);
      let li = document.createElement('li');
      li.textContent = `(${this.hoursArray[i]}: ${cookiesSoldThisHour}) - Cookies were sold`;
      dubaiList.appendChild(li);
    }
    return this.cookiesSoldPerHourArray;
  },
};
dubaiStore.calcCookiesSoldPerHour();

let parisStore = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  dailyTotalOfCustomers: 0,
  cookiesSoldPerHourArray: [],
  hoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function() {
    for (let i = 0; i < this.hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
      this.cookiesSoldPerHourArray.push(`${this.hoursArray[i]}: ${cookiesSoldThisHour}`);
      let li = document.createElement('li');
      li.textContent = `(${this.hoursArray[i]}: ${cookiesSoldThisHour}) - Cookies were sold`;
      parisList.appendChild(li);
    }
    return this.cookiesSoldPerHourArray;
  },
};
parisStore.calcCookiesSoldPerHour();

let limaStore = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSales: 4.6,
  dailyTotalOfCustomers: 0,
  hoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesSoldPerHourArray: [],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calcCookiesSoldPerHour: function() {
    for (let i = 0; i < this.hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
      this.cookiesSoldPerHourArray.push(`${this.hoursArray[i]}: ${cookiesSoldThisHour}`);
      let li = document.createElement('li');
      li.textContent = `(${this.hoursArray[i]}: ${cookiesSoldThisHour}) - Cookies were sold`;
      limaList.appendChild(li);
    }
    return this.cookiesSoldPerHourArray;
  },
};
limaStore.calcCookiesSoldPerHour();
