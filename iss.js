const request = require('request');

const nextISSTimesForMyLocation = callback => {
  fetchMyIP((error, ip) => {
    if (error) return callback(error, null);

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) return callback(error, null);

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) return callback(error, null);

        callback(null, nextPasses);
      });
    });
  });
};



//function to fetch IP
const fetchMyIP = callback => {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

//function takes in IP and returns coordinates
const fetchCoordsByIP = (ip, callback) => {
  request('https://freegeoip.app/json/' + ip, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  });
};

//function takes in coordinates and returns ISS info
const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const dataISS = JSON.parse(body).response;
    callback(null, dataISS);
  });
};

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


module.exports = { printPassTimes, fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
