// Select HTML Elements
// Countdown dashboard
const decadesEl = document.getElementById("decades")!
const yearsEl = document.getElementById("years")!
const monthsEl = document.getElementById("months")!
const weeksEl = document.getElementById("weeks")!
const daysEl = document.getElementById("days")!
const hoursEl = document.getElementById("hours")!
const minsEl = document.getElementById("mins")!
const secondsEl = document.getElementById("seconds")!
// Time is Out message
const messEl = document.getElementById("mess")!
// Input Fields
const getDateEl = document.getElementById("date")!
const getMinuteEl = document.getElementById("minute")
const getHourEl = document.getElementById("hour")

/**
 * Add leading Zero to numbers
 * @example 2 > 02
 * @param {number} number
 * @returns {string} the number with leading zero
 */
const addLeadingZero = (number: number): string =>
  number < 10 ? `0${number}` : number.toString()

// Generates Minutes Input List
for (let i = 0; i < 60; i++) {
  let opt = document.createElement("option")
  opt.value = i < 10 ? `0${i}` : i.toString()
  opt.textContent = i < 10 ? `0${i}` : i.toString()
  getMinuteEl?.appendChild(opt)
}

// Generates Hours Input List
for (let i = 0; i < 24; i++) {
  let opt = document.createElement("option")
  opt.value = i < 10 ? `0${i}` : i.toString()
  opt.textContent = i < 10 ? `0${i}` : i.toString()
  getHourEl?.appendChild(opt)
}
