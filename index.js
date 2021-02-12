// require and run our main fetch function
const { nextISSTimesForMyLocation, fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  } 
  console.log(passTimes);
});


// // invokes function with callback function that relays the msg depending on ip result
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// // inovke coord function by inputting IP (manually for now)
// fetchCoordsByIP('184.66.236.186', (error, coord) => {
//   if (error) {
//     console.log("GEO CORDS...It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned COORD:', coord);
// });

// //invoke ISS info function
// const latlong = { latitude: 48.4152, longitude: -123.3655 };

// fetchISSFlyOverTimes(latlong, (error, issPass) => {
//   if (error) {
//     console.log("ISS...It didn't work! 🌌", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times 🚀 : \n', issPass);

// });
