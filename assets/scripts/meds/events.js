'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetMeds = (event) => {
  event.preventDefault()
  api.getMeds()
    .then(ui.getMedsSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#get-meds').on('click', onGetMeds)
}

module.exports = {
  addHandlers
}
