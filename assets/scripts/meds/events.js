'use strict'

const getMeds = (event) => {
  event.preventDefault()
  console.log(event.target)
}

const addHandlers = () => {
  $('#get-meds').on('click', getMeds)
}

module.exports = {
  addHandlers
}
