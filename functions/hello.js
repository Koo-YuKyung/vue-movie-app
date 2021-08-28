exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Koo',
      age: 85,
      email: 'grayzone13@nate.com'
    })
  }
}