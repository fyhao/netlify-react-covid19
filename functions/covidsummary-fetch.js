const fetch = require("node-fetch");
const API_URL = '';
exports.handler = async function (event, context) {
	
  var mockedData = {
	totalcases:10000,
	totalcases_dailychange:'+1234',
	death:300,
	death_dailychange:'+1234',
	recovered:8000,
	recovered_dailychange:'+1234',
  };
  
  try {
    //const response = await fetch(API_URL);
    //var data = await response.json();
    //mockeddata = dataTransform(mockeddata);
	//data = dataTransform(data);
	var data = mockedData;
	return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
