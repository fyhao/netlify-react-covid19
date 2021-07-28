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
	console.log('debug 1');
	const response = fetch(process.env.FIREBASE_NETLIFY_COVIDSTATS_URL)
		.then(response => response.json())
		.then(data => {
			console.log('debug 2 data: ' + JSON.stringify(data));
			serviceAccount = data;
			admin.initializeApp({
			  credential: admin.credential.cert(serviceAccount)
			});
			db = admin.firestore()
		});
    
}

module.exports = {
	request : function() {
		return new Promise((resolve,reject) => {
			console.log('request for db: ' + (db != null));
			resolve(db);
		});
	}
};