// require and run our main fetch function
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// invokes function with callback function that relays the msg depending on ip result
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});


fetchCoordsByIP('184.66.236.186', (error, coord) => {
  if (error) {
    console.log("GEO CORDS...It didn't work!", error);
    return;
  }
  console.log('It worked! Returned COORD:', coord);
});

// fetchCoordsByIP takes in an IP address and returns latitude and logitude
// https://freegeoip.app/json/