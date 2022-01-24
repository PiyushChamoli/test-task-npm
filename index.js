console.log("Hello World");

const moment = require("moment");
const lodash = require('lodash');

// February 12th 2021, 12:54:12 pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Friday
console.log(moment().format('dddd'));

// Feb 12th 21
console.log(moment().format("MMM Do YY"));

// 2020-01-01
console.log(moment("20200101", "YYYYMMDD").fromNow());

// 2020-14-01
console.log(moment("20201401", "YYYYMMDD").fromNow());

// adds 7 days to current date
console.log(moment().add(7, 'days').calendar());

// adds 7 months to current date
console.log(moment().add(7, 'months').calendar());

// subtracts 7 days to current date
console.log(moment().subtract(7, 'days').calendar());

// subtracts 7 months to current date
console.log(moment().subtract(7, 'months').calendar());

// date1: 2014-11-11
console.log(moment().isValid("2014-11-11"));

// date2: 2015-09-11
console.log(moment().isValid("2015-09-11"));

//Lodash

let arr = [1,9,5,8,3,7];
let arr2 = [5.6,7.6,8.9,2.4,5,2];
let arrUnion = [10,5,9,3,7,15,20,86,95];

console.log(lodash.reverse([...arr]));

console.log(lodash.union([...arr],[...arrUnion]));

console.log(lodash.countBy([...arr2], Math.floor));

console.log(lodash.shuffle([...arr2]));