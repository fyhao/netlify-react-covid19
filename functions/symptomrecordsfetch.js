const fetch = require("node-fetch");

const db = require('./utils/firebase');
const API_URL = process.env.COVIDSTAT_APIURL;


exports.handler = async function (event, context) {
	
  try {
    //const response = await fetch(API_URL);
    //var data = await response.json();
	var db1 = await db.request();
    var docs = await db1.collection('symptoms').get();
	console.log(docs);
	var data = [];
	for(const doc of docs.docs) {
		data.push(doc.data());
	}
	data = dataTransform(data);
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