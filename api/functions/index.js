const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

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
  // return values of Kqctimes. The number of Kqctimes return is 10
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
  // return values of Information. The number of Information return is 10
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
  // In this endpoint, cheack user name and password, and return 200 Success or
  // 404 Not Found. In this application, the kind of users KQC-Web use is three.
  //
  // Users
  // 1. Common KQC members.
  //   this user can use only for the purpose of visiting contents of Kqctimes or
  //   Informations. They can not create, delete the Kqctimes, but they can create
  //   or delete Information. Because in private page (I call it MEMBERS PAGE),
  //   all contents except KQCtimes is public for all members
  // 2. Manager
  //   this user can not only visiting contents KQC-Web has, also create or delete
  //   contents contains KQCtimes. This user has no authority to change system
  //   program, but can order developpers to create or fix this application
  // 3. Developper
  //    this user has authority to develop this application
})
