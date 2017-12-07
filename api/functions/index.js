const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({origin: true});
const Base64 = require('js-base64').Base64
admin.initializeApp(functions.config().firebase)

exports.kqctimes = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'OPTIONS':
      response.set('Access-Control-Allow-Origin', '*')
              .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
              .set('Access-Control-Allow-Methods', 'GET, POST')
              .status(200).send('OK')
      break
    case 'GET':
      cors(request, response, function() {
        getKqctimes(request, response)
      })
      break
    case 'POST':
      cors(request, response, function() {
        postKqctimes(request, response)
      })
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
  if (request.query.year !== undefined) {
    // if query has contained, search data matched to query
    admin.database().ref('/development/kqctimes')
      .orderByChild('year').equalTo(parseInt(request.query.year, 10))
      .once('value', function(data) {
        response.status(200).send(data)
      }, {
        function(errorObject) {
          response.status(404).send({ message: 'Not Found' })
        }
      })
  } else if (request.params[0] !== "") {
    admin.database().ref('/development/kqctimes')
      .orderByChild('id').equalTo(request.params[0].slice(1))
      .once('value')
      .then(snapshot => {
        response.status(200).send(snapshot.val())
      })
      .catch(error => {
        response.status(404).send({ message: 'Not Found' })
      })
  } else {
    admin.database().ref('/development/kqctimes')
      .once('value', function(data) {
        response.status(200).send(data)
      }, {
        function(errorObject) {
          response.status(404).send({ message: 'Not Found' })
        }
      })
  }
}

exports.information = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'OPTIONS':
      response.set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            .set('Access-Control-Allow-Methods', 'GET, POST')
            .status(200).send('OK')
      break
    case 'GET':
      cors(request, response, function() {
        getInformation(request, response)
      })
      break
    case 'POST':
      cors(request, response, function () {
        postInformation(request, response)
      })
      break
    default:
      response.status(400).send({ error: 'Something blew up!' })
      break
  }
})

function getInformation (request, response) {
    // return values of Information. The number of Information return is 10
  if (request.params[0] !== "") {
    // request parametar is exist
    admin.database().ref('/development/information')
      .orderByChild('id').equalTo(request.params[0].slice(1))
      .once('value')
      .then(snapshot => {
        response.status(200).send(snapshot.val())
      })
      .catch(error => {
        response.status(404).send({ message: 'Not Found' })
      })
  } else {
    admin.database().ref('/development/information')
      .once('value', function(data) {
        response.status(200).send(data)
      }, function(errorObject) {
        response.status(404).send({ message: 'Not Found' })
      })
  }
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
  let id = getUniqueId()
  return id + 'kqct'
}

function genJobsId() {
  let id = getUniqueId()
  return id + 'jobs'
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
    case 'OPTIONS':
      response.set('Access-Control-Allow-Origin', '*')
              .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
              .set('Access-Control-Allow-Methods', 'GET, POST')
              .status(200).send('OK')
      break
    case 'GET':
      getUserAuth(request, response)
      break
    case 'POST':
      postUserAuth(request, response)
      break
    case 'PATCH':
      patchUserAuth(request, response)
      break
    default:
      response.status(400).send({ error: 'Something blew up!' })
      break
  }
})

function patchUserAuth (request, response) {

}

function postUserAuth(request, response) {
  if (checkAuth(request) === false) {
    response.status(400).send({ message: 'Bad Request' })
  } else {
    const name = request.body.name
    const password = request.body.password

    let json = {}
    json.name = name
    json.password = password

    let jsonString = generateJson(json)
    let encodedToken = generateBase64Token(jsonString)

    response.status(200).send(encodedToken)
  }
}

function getUserAuth (request, response) {
  response.status(200).send({ message: 'Request called' })
}

function checkAuth(request) {
  const name = request.body.name
  const password = request.body.password

  if (name == undefined || password == undefined) {
    return false
  } else {
    return true
  }
}

function generateJson(string) {
  return JSON.stringify(string)
}

function generateBase64Token(json) {
  return Base64.encode(json)
}

exports.jobs = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'OPTIONS':
      response.set('Access-Control-Allow-Origin', '*')
              .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
              .set('Access-Control-Allow-Methods', 'GET, POST, PATCH')
              .status(200).send('OK')
      break
    case 'GET':
      getJobs(request, response)
      break
    case 'POST':
      postJobs(request, response)
      break
    case 'PATCH':
      updateJobs(request, response)
      break
    case 'DELETE':
      removeJobs(request, response)
      break
    default:
      response.status(400).send({ error: 'Something blew up!' })
      break
  }
})

function getJobs(request, response) {
  if (request.params[0] !== "") {
    // request parametar is exist
    admin.database().ref('/development/jobs')
      .orderByChild('id').equalTo(request.params[0].slice(1))
      .once('value')
      .then(snapshot => {
        response.status(200).send(snapshot.val())
      })
      .catch(error => {
        response.status(404).send({ message: 'Not Found' })
      })
  } else {
    admin.database().ref('/development/jobs')
      .once('value', function(data) {
        response.status(200).send(data)
      }, function(errorObject) {
        response.status(404).send({ message: 'Not Found' })
      })
  }
}

function postJobs(request, response) {
  if (checkPOSTJobs(request) === false) {
    response.status(400).send({ error: 'Bad Request' })
  } else {
    const title = request.body.title
    const publisher = request.body.publisher
    const body = request.body.body
    const password = request.body.password

    let jsonStr = {
      'id': genJobsId(),
      'title': title,
      'publisher': publisher,
      'body': body,
      'password': password
    }
    admin.database().ref('/development/jobs')
      .push(jsonStr).then(snapshot => {
        response.status(201).send({ message: 'Jobs created' })
      })
      .catch(error => {
        response.status(418).send({ 'error': error })
      })
  }
}

function updateJobs(request, response) {
  response.status(200).send({ message: 'Hello PATCH Jobs' })
}

function removeJobs(request, response) {
  if (request.params[0] !== "") {
    // request parametar is exist
    admin.database().ref('/development/jobs')
      .orderByChild('id').equalTo(request.params[0].slice(1))
      .once('value')
      .then(snapshots => {
        snapshots.forEach(function(snapshot) {
          let ref = snapshot.ref
          ref.remove()
        })
      })
      .catch(error => {
        response.status(404).send({ error: 'Not Resource Found' })
      })
  } else {
    response.status(404).send({ error: 'Not Found' })
  }
}

function checkPOSTJobs(request) {
  const title = request.body.title
  const publisher = request.body.publisher
  const body = request.body.body
  const password = request.body.password

  if (title == undefined || publisher == undefined || body == undefined || password == undefined) {
    return false
  } else {
    return true
  }
}
