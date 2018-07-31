'use strict'

const config = require('../config')

const getMeds = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/medications'
  })
}

module.exports = {
  getMeds
}
