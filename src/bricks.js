function addHeader (body) {
  return 'header' + body
}

function addFooter (body) {
  return body + 'footer'
}

module.exports = { addHeader, addFooter }
