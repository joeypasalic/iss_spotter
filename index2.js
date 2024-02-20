const { nextISSTimesForMyLocation, printPassTimes, fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
