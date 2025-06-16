// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
 return drivers.slice(0,2);
 
};
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (lastDrivers){
  return lastDrivers.slice(2,4);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}