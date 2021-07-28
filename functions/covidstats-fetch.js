const fetch = require("node-fetch");

var admin = require("firebase-admin");
var db = null;
var serviceAccount = null;
console.log('init firebase');
if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: '.env.local' });
	serviceAccount = JSON.parse(require('fs').readFileSync('serviceAccountKey.json'));
		
	admin.initializeApp({
	  credential: admin.credential.cert(serviceAccount)
	});
	db = admin.firestore()
}
else {
	const response = fetch(process.env.FIREBASE_NETLIFY_COVIDSTATS_URL)
		.then(response => response.json())
		.then(data => {
			serviceAccount = data;
			admin.initializeApp({
			  credential: admin.credential.cert(serviceAccount)
			});
			db = admin.firestore()
		});
    
}
const API_URL = process.env.COVIDSTAT_APIURL;


exports.handler = async function (event, context) {
	
  var mockeddata = [{"totalcases":"191712967","death":"4112792","recovered":"174567234","datetime":"2021-07-20 11:50:02"},{"totalcases":"191712967","death":"4112792","recovered":"174567234","datetime":"2021-07-20 11:40:02"}];
  
  try {
    const response = await fetch(API_URL);
    var data = await response.json();
    mockeddata = dataTransform(mockeddata);
	data = dataTransform(data);
	// wait for the record to be added
	  db.collection('audit').add({
		msg:'Request came at ' + new Date().toString()
	  })
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