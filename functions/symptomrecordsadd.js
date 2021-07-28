const fetch = require("node-fetch");

const db = require('./utils/firebase');
const API_URL = process.env.COVIDSTAT_APIURL;


exports.handler = async function (event, context) {
	
  try {
    var data = JSON.parse(event.body);
	
	var db1 = await db.request();
	if(db1 == null) {
		return { statusCode: 200, body: JSON.stringify(data) };
	}
	db1.collection('symptoms').add(data);
	
	return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

function dataTransform(data) {
	var id = 0;
	for(var i = 0; i < data.length; i++) {
		data.id = ++id;
	}
	return data;
}