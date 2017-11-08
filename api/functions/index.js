const functions = require('firebase-functions')

exports.kqctimes = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'GET':
      getKqctimes(request, response)
      break
    case 'POST':
      postKqctimes(request, response)
      break
    default:
      response.status(400).send({ error: 'Something blew up!' })
      break
  }
})

function postKqctimes(request, response) {
  if (checkKqctimes(request) === false) {
    response.status(400).send({ message : 'Bad Request'})
  } else {
    response.status(201).send({ message : 'KQCTimes created'})
  }
}

function checkKqctimes(request) {
  const title = request.body.title
  const subTitle = request.body.sub_title
  const publisher = request.body.publisher
  const body = request.body.body
  const year = request.body.year

  if (title === undefined ||
    subTitle === undefined ||
    publisher === undefined ||
    body === undefined ||
    year === undefined) {
    return false
  } else {
    return true
  }
}

function getKqctimes(request, response) {
  response.status(200).send('GET request')
}

exports.information = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'GET':
      getInformation(request, response)
      break
    case 'POST':
      postInformation(request, response)
      break
    default:
      response.status(400).send({ error: 'Something blew up!' })
      break
  }
})

function getInformation(request, response) {
  response.status(200).send('GET request')
}

function postInformation(request, response) {
  if (checkInformation(request) === false) {
    response.status(400).send({ message : 'Bad Request'})
  } else {
    response.status(201).send({ message : 'Information created'})
  }
}

function checkInformation(request) {
  const title = request.body.title
  const publisher = request.body.publisher
  const body = request.body.body

  if (title === undefined || publisher === undefined || body === undefined) {
    return false
  } else {
    return true
  }
}

exports.login = functions.https.onRequest((request, response) => {

})
