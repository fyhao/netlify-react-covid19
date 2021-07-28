const fetch = require("node-fetch");

var serviceAccount = null;
if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: '.env.local' });
	serviceAccount = JSON.parse(require('fs').readFileSync('serviceAccountKey.json'));
}
else {
	serviceAccount = {
	  "type": "service_account",
	  "project_id": process.env.FIREBASE_PROJECT_ID,
	  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
	  "private_key": process.env.FIREBASE_PRIVATE_KEY,
	  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
	  "client_id": process.env.FIREBASE_CLIENT_ID,
	  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
	  "token_uri": "https://oauth2.googleapis.com/token",
	  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
	};
}
const API_URL = process.env.COVIDSTAT_APIURL;

var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
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