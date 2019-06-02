let rainbow = require('@architect/shared/rainbow')

exports.handler = async function http(req) {
  console.log('hi', rainbow)
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `<h1>Hello from my single route!<br>${rainbow}${rainbow}${rainbow}</h1>`
  }
}
