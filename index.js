// require and run our main fetch function
const { fetchMyIP } = require('./iss');

// invokes function with callback function that relays the msg depending on ip result
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log('It worked! Returned IP:', ip);
});