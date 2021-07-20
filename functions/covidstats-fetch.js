exports.handler = function (event, context, callback) {
	
  var data = [
	{id:1,cases:1,death:1,recovered:1},
	{id:2,cases:2,death:2,recovered:2}
  ];
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });
};