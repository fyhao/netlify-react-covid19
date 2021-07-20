const fetch = require("node-fetch");
const API_URL = 'https://api.imgshow-apps.com/admin/misc/admin_coronavirus.php?action=viewbyapi';
  
exports.handler = async function (event, context) {
	
  var mockeddata = [{"totalcases":"191712967","death":"4112792","recovered":"174567234","datetime":"2021-07-20 11:50:02"},{"totalcases":"191712967","death":"4112792","recovered":"174567234","datetime":"2021-07-20 11:40:02"}];
  
  try {
    const response = await fetch(API_URL);
    var data = await response.json();
    mockeddata = dataTransform(mockeddata);
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