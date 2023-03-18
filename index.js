// Code your solution in this file!
// return the first two drivers from the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // return the last two drivers from the array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // array containing the two functions defined above
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // higher-order function that returns a function to multiply a fare by a given integer
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // function that doubles a fare
  const fareDoubler = createFareMultiplier(2);
  
  // function that triples a fare
  const fareTripler = createFareMultiplier(3);
  
  // function that takes an array of drivers and a function as arguments and returns the selected drivers
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };