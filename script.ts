// Select HTML Elements
// Title
const titleEl = document.getElementById("title")!
const titleNameEl = document.getElementById("title-name")!
const inputTitleNameEl = document.getElementById("input-title-name")!
const setTitleEl = document.getElementById("set-title")!

// Countdown dashboard countdown-dashboard
const dashboardEl = document.getElementById("countdown-dashboard")!
const decadesEl = document.getElementById("decades")!
const yearsEl = document.getElementById("years")!
const monthsEl = document.getElementById("months")!
const weeksEl = document.getElementById("weeks")!
const daysEl = document.getElementById("days")!
const hoursEl = document.getElementById("hours")!
const minsEl = document.getElementById("mins")!
const secondsEl = document.getElementById("seconds")!
// Time is Out message
const messEl = document.getElementById("message")!
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

// Update Timer Title

// Get Timer name from the browser storage
if (localStorage.getItem("timerName")) {
  titleNameEl.textContent = localStorage.getItem("timerName") as string
}
inputTitleNameEl.parentElement!.classList.add("hide") // Hide input field

let titleEditing = false // Watch editing status
// Focus input field when editing
inputTitleNameEl.addEventListener("transitionend", function () {
  inputTitleNameEl.focus()
})
setTitleEl.addEventListener("click", function () {
  if (titleEditing) {
    // Disable Editing
    inputTitleNameEl.style.display = "none"
    titleNameEl.style.visibility = "visible"
    setTitleEl.style.visibility = "visible"
    titleEditing = false
  } else {
    // Enable Editing
    inputTitleNameEl.parentElement!.classList.add("show") // Show input field
    titleNameEl.style.visibility = "hidden"
    setTitleEl.style.visibility = "hidden"
    titleEditing = true
  }
})
// Update Timer Name
inputTitleNameEl.addEventListener("change", function () {
  titleNameEl.textContent = (inputTitleNameEl as HTMLInputElement).value
  localStorage.setItem(
    "timerName",
    (inputTitleNameEl as HTMLInputElement).value
  )
})

// Generates Minutes Input List
for (let i = 0; i < 60; i++) {
  let opt = document.createElement("option")
  opt.value = addLeadingZero(i)
  opt.textContent = addLeadingZero(i)
  opt.classList.add("option")
  getMinuteEl?.appendChild(opt)
}

// Generates Hours Input List
for (let i = 0; i < 24; i++) {
  let opt = document.createElement("option")
  opt.value = addLeadingZero(i)
  opt.textContent = addLeadingZero(i)
  opt.classList.add("option")
  getHourEl?.appendChild(opt)
}

// Set inputs with the current date & time
let date = new Date()
let min = addLeadingZero(date.getMinutes())
let hour = addLeadingZero(date.getHours())
let day = addLeadingZero(date.getDate())
let month = addLeadingZero(date.getMonth() + 1)
let year = date.getFullYear()
let today = year + "-" + month + "-" + day
;(getDateEl as HTMLInputElement).value = today
;(getMinuteEl as HTMLInputElement).value = min.toString()
;(getHourEl as HTMLInputElement).value = hour.toString()

// init enterdate from the browser storage
let dateEntered: Date
if (localStorage.getItem("deadline")) {
  dateEntered = new Date(localStorage.getItem("deadline") as string)
}
console.log("User Last Entered Date: " + localStorage.getItem("deadline"))

// Update the Countdown with user input
document.getElementById("deadline")!.addEventListener("change", function () {
  let newDate = (getDateEl as HTMLInputElement).value
  let newHour = (getHourEl as HTMLInputElement).value
  let newMin = (getMinuteEl as HTMLInputElement).value
  let newTime = new Date(`${newDate}T${newHour}:${newMin}`)
  dateEntered = new Date(`${newDate}T${newHour}:${newMin}`)
  localStorage.setItem("deadline", dateEntered.toString())

  countdown()
  setInterval(countdown, 1000)
})

function countdown() {
  const currentDate: Date = new Date()

  // Hides dashboard if no date entered and show message
  if (dateEntered == undefined) {
    displayMessage()
    messEl.textContent = "No Time Left"
    return
  }
  // Hides dashboard if time is Out and show message
  if (dateEntered.getTime() - currentDate.getTime() <= 0) {
    displayMessage()
    messEl.textContent = "Time is Out"
    return
  }
  // Hides the message and display Dashboard
  messEl.style.display = "none"
  dashboardEl.style.display = "flex"
  const totalSeconds: number =
    (dateEntered.getTime() - currentDate.getTime()) / 1000
  const decades: number = Math.floor(totalSeconds / 3600 / 24 / 365 / 10)
  const years: number = Math.floor(totalSeconds / 3600 / 24 / 365) % 10
  const months: number = Math.floor(totalSeconds / 3600 / 24 / 7 / 4) % 12
  const weeks: number = Math.floor(totalSeconds / 3600 / 24 / 7) % 4
  const days: number = Math.floor(totalSeconds / 3600 / 24) % 7
  const hours: number = Math.floor(totalSeconds / 3600) % 24
  const mins: number = Math.floor(totalSeconds / 60) % 60
  const seconds: number = Math.floor(totalSeconds) % 60
  // Print the countdown time clock
  decadesEl.textContent = decades.toString()
  yearsEl.textContent = years.toString()
  monthsEl.textContent = months.toString()
  weeksEl.textContent = weeks.toString()
  daysEl.textContent = addLeadingZero(days).toString()
  hoursEl.textContent = addLeadingZero(hours)
  minsEl.textContent = addLeadingZero(mins)
  secondsEl.textContent = addLeadingZero(seconds)
  // Dispaly only needed cells
  decades <= 0
    ? (decadesEl.parentElement!.style.display = "none")
    : (decadesEl.parentElement!.style.display = "block")
  years <= 0
    ? (yearsEl.parentElement!.style.display = "none")
    : (yearsEl.parentElement!.style.display = "block")
  months <= 0
    ? (monthsEl.parentElement!.style.display = "none")
    : (monthsEl.parentElement!.style.display = "block")
  weeks <= 0
    ? (weeksEl.parentElement!.style.display = "none")
    : (weeksEl.parentElement!.style.display = "block")
  days <= 0
    ? (daysEl.parentElement!.style.display = "none")
    : (daysEl.parentElement!.style.display = "block")
  hours <= 0
    ? (hoursEl.parentElement!.style.display = "none")
    : (hoursEl.parentElement!.style.display = "block")
  mins <= 0
    ? (minsEl.parentElement!.style.display = "none")
    : (minsEl.parentElement!.style.display = "block")
  seconds <= 0
    ? (secondsEl.parentElement!.style.display = "none")
    : (secondsEl.parentElement!.style.display = "block")
}
/**
 * Hide the Counter dashboard and display the message
 *
 */
function displayMessage() {
  dashboardEl.style.display = "none"
  messEl.style.display = "block"
}
// initial call
countdown()
setInterval(countdown, 1000)
