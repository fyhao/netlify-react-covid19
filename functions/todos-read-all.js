exports.handler = (event, context) => {
  console.log('Function `todo-read-all` invoked')
	return {
	  statusCode: 200,
	  body: JSON.stringify({date:new Date().toString()})
	}
}
