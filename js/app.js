'use strict';

console.log('hello');
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let totalSoldEachDay = 0;

let seattleStore = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  dailyTotalOfCustomers: 0,
  cookiesSoldPerHourArray: [],
  genRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesSoldPerHour: function() {
    //calc cookies for all 14 hours
    // for loop for hours length array
    // in loop multiply avg
    console.log('hoursArray=================================================', hoursArray);
    for (let i = 0; i < hoursArray.length; i++){
      let custOnHour = this.genRandomCustomers();
      // console.log(custOnHour);
      let cookiesSoldThisHour = Math.ceil(custOnHour * this.avgCookieSales);
      this.cookiesSoldPerHourArray.push(`${hoursArray[i]}: ${cookiesSoldThisHour}`);
    }
    return this.cookiesSoldPerHourArray;
  },
  render: function(){
    this.calcCookiesPerHour();
  }
};
console.log(seattleStore);
seattleStore.calcCookiesSoldPerHour();
seattleStore.render();

// let tokyoStore = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCustomers: 1.2,
//   dailyTotalOfCustomers: 0,
//   cookiesSoldPerHourAvgArray: [],
//   genRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let dubaiStore = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCustomers: 2.3,
//   dailyTotalOfCustomers: 0,
//   cookiesSoldPerHourAvgArray: [],
//   genRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let parisStore = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCustomers: 2.3,
//   dailyTotalOfCustomers: 0,
//   cookiesSoldPerHourAvgArray: [],
//   genRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let limaStore = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCustomers: 4.6,
//   dailyTotalOfCustomers: 0,
//   cookiesSoldPerHourAvgArray: [],
//   genRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };
