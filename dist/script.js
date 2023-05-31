"use strict";
// Select HTML Elements
// Countdown dashboard
const decadesEl = document.getElementById("decades");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const weeksEl = document.getElementById("weeks");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
// Time is Out message
const messEl = document.getElementById("message");
// Input Fields
const getDateEl = document.getElementById("date");
const getMinuteEl = document.getElementById("minute");
const getHourEl = document.getElementById("hour");
/**
 * Add leading Zero to numbers
 * @example 2 > 02
 * @param {number} number
 * @returns {string} the number with leading zero
 */
const addLeadingZero = (number) => number < 10 ? `0${number}` : number.toString();
// Generates Minutes Input List
for (let i = 0; i < 60; i++) {
    let opt = document.createElement("option");
    opt.value = i < 10 ? `0${i}` : i.toString();
    opt.textContent = i < 10 ? `0${i}` : i.toString();
    getMinuteEl === null || getMinuteEl === void 0 ? void 0 : getMinuteEl.appendChild(opt);
}
// Generates Hours Input List
for (let i = 0; i < 24; i++) {
    let opt = document.createElement("option");
    opt.value = i < 10 ? `0${i}` : i.toString();
    opt.textContent = i < 10 ? `0${i}` : i.toString();
    getHourEl === null || getHourEl === void 0 ? void 0 : getHourEl.appendChild(opt);
}
// Set inputs with the current date & time
let date = new Date();
let min = addLeadingZero(date.getMinutes());
let hour = addLeadingZero(date.getHours());
let day = addLeadingZero(date.getDate());
let month = addLeadingZero(date.getMonth() + 1);
let year = date.getFullYear();
let today = year + "-" + month + "-" + day;
getDateEl.value = today;
getMinuteEl.value = min.toString();
getHourEl.value = hour.toString();
