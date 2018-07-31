'use strict'

const medsTemp = require('../templates/medications.hbs')

const getMedsSuccess = (data) => {
  console.log(data)
  const showMedsHtml = medsTemp({ meds: data.medications })
  $('#content').html(showMedsHtml)
}

const failure = () => {
  console.error()
}

module.exports = {
  getMedsSuccess,
  failure
}
