// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const new_array = drivers.map(function(driver) {return driver.toLowerCase()});
  return new_array;
}

function nameToAttributes(drivers) {
  const newArray = drivers.map(driver => driver.split(" "));
  const newerArray = newArray.map(driver => Object.assign({}, { firstName: driver[0], lastName: driver[1] }));
  return newerArray;
}

function attributesToPhrase(drivers) {
  const sentence = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return sentence;
}
