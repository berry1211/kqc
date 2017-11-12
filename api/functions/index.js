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

function postKqctimes (request, response) {
  if (checkKqctimes(request) === false) {
    response.status(400).send({ message: 'Bad Request' })
  } else {
    const title = request.body.title
    const subTitle = request.body.sub_title
    const publisher = request.body.publisher
    const body = request.body.body
    const year = request.body.year

    let jsonStr = {
      'id': genKqctimesId(),
      'title': title,
      'sub_title': subTitle,
      'publisher': publisher,
      'body': body,
      'year': year
    }
    admin.database().ref('/development/kqctimes')
      .push(jsonStr).then(snapshot => {
        response.status(201).send({ message: 'KqcTimes created' })
      })
      .catch(error => {
        response.status(418).send({ 'error': error })
      })
  }
}

function checkKqctimes (request) {
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

function getKqctimes (request, response) {
    // return values of Kqctimes. The number of Kqctimes return is 10
  admin.database().ref('/development/kqctimes')
    .once('value', function(data) {
      response.status(200).send(data)
    }, {
      function(errorObject) {
        response.status(404).send({ message: 'Not Found' })
      }
    })
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

function getInformation (request, response) {
    // return values of Information. The number of Information return is 10
  admin.database().ref('/development/information')
    .once('value', function(data) {
      response.status(200).send(data)
    }, function(errorObject) {
      response.status(404).send({ message: 'Not Found' })
    })
}

function postInformation (request, response) {
  if (checkInformation(request) === false) {
    response.status(400).send({ message: 'Bad Request' })
  } else {
    const title = request.body.title
    const publisher = request.body.publisher
    const body = request.body.body

    let jsonStr = {
      'id': genInformationId(),
      'title': title,
      'publisher': publisher,
      'body': body
    }
    admin.database().ref('/development/information')
      .push(jsonStr).then(snapshot => {
        response.status(201).send({ message: 'Information created' })
      })
      .catch(error => {
        response.status(418).send({ 'error': error })
      })
  }
}

function checkInformation (request) {
  const title = request.body.title
  const publisher = request.body.publisher
  const body = request.body.body

  if (title === undefined || publisher === undefined || body === undefined) {
    return false
  } else {
    return true
  }
}

function genInformationId () {
  let id = getUniqueId()
  return id + 'info'
}


function genKqctimesId () {
  let id = getUniqueId
  return id + 'kqct'
}

// generate UniqueId for information and Kqctimes
function getUniqueId () {
  // 使用文字の定義
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  // 桁数の定義
  var len = 16

  // ランダムな文字列の生成
  var result = ''
  for (var i = 0; i < len; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length))
  }
  return result
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
  switch (request.method) {
    case 'GET':
      getUserAuth(request, response)
      break
    case 'PATH':
      patchUserAuth(request, response)
      break
    default:
      break
  }
})

function patchUserAuth (request, response) {

}

function getUserAuth (request, response) {

}
