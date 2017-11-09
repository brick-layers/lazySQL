function addHeader (body) {
  console.log(this)
  return 'header\n' + body
}

function addFooter (body) {
  return body + '\nfooter'
}

module.exports = { addHeader, addFooter }
